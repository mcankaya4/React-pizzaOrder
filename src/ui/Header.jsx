import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header>
      <Link to="/">Pizza App</Link>

      <SearchOrder />

      <p>Eyll</p>
    </header>
  );
}

export default Header;
