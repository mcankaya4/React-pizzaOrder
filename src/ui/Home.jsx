import CreateUser from "../features/user/CreateUser.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Home() {
  const { username } = useSelector((store) => store.user);
  const navigate = useNavigate();
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <Button
          type="primary"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Contiune ordering, {username}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
