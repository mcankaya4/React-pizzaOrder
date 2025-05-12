import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className="border-b border-b-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Pizza App
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
