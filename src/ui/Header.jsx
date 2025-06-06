import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizza App
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
