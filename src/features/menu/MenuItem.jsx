import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, isInCart } from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const isCart = useSelector(isInCart(id));

  function handleAdd() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {!soldOut && !isCart && (
            <Button type="small" onClick={handleAdd}>
              Add to cart
            </Button>
          )}
          {!soldOut && isCart && (
            <div className="flex items-center gap-10">
              <UpdateItemQuantity id={id} />
              <DeleteItem id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
