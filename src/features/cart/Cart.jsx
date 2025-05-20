import { useNavigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice.js";
import { getUsername } from "../user/userSlice.js";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b border-b-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button
          type="primary"
          onClick={() => {
            navigate("/order/new");
          }}
        >
          Order pizzas
        </Button>
        <Button onClick={handleClear} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
