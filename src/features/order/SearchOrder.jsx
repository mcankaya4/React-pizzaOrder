import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm duration-200 placeholder:text-stone-400 focus:w-72 focus:ring-3 focus:ring-yellow-500/30 focus:ring-offset-1 focus:outline-none sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
