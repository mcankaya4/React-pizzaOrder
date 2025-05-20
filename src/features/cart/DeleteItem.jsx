import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice.js";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
