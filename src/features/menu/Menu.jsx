import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  // useLoaderData ile route sayesinde gelen api verilerini alıyoruz.
  const menu = useLoaderData();
  return (
    <ul className="flex flex-col divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Bu fonksiyon app içerinde menu rotası oluşturulurken çağırılıyor.
// Böylelikle ne zaman bu rota'ya yönlendirme olsa api'den veriler yüklenecek.
export async function loader() {
  return await getMenu();
}

export default Menu;
