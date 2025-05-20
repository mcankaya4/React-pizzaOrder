import Button from "../../ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCartItemQuantity,
  increaseItemQuantity,
} from "./cartSlice.js";

function UpdateItemQuantity({ id }) {
  const itemQuantity = useSelector(getCartItemQuantity(id));
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <div className="flex items-center gap-3">
      <Button onClick={handleDecrease} type="xsmall">
        -
      </Button>
      <span className="text-sm font-medium">{itemQuantity}</span>
      <Button onClick={handleIncrease} type="xsmall">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
