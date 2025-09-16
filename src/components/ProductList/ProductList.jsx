import { NavLink } from "react-router";
import Cards from "../Cards/Cards";

const ProductList = ({ data, title, isLoading, error }) => {
  if (isLoading) return <p>Загрузка {title}...</p>;
  if (error) return <p>Ошибка при загрузке {title}</p>;

  const routesMap = {
    "Суши": "/sushi",
    "Роллы": "/rolls",
    "Сеты": "/sets",
    "Закуски": "/snacks",
    "Напитки": "/beverages",
    "Соусы": "/sauces",
    "Неизвестно": "/unknown",
  }

  return (
    <div className="my-10">
      <div className="flex justify-between py-8">
      <h2 className="text-4xl font-bold mb-4 ml-20">{title}</h2>

      <NavLink to={routesMap[title] || "/"}>
      <button className="text-[#00CC2D] p-5 bg-white rounded-2xl mb-4 mr-20 cursor-pointer hover:scale-110 hover:shadow-sm">
      
          Смотреть все
        
      </button>
      </NavLink>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
