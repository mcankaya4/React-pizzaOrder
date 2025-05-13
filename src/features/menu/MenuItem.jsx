import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex items-center py-2">
      <img src={imageUrl} alt={name} className="h-24 w-24" />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <Button>Add to cart</Button>
    </li>
  );
}

export default MenuItem;
