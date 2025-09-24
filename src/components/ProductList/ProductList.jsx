import { NavLink } from "react-router-dom";
import Cards from "../Cards/Cards";
import "./ProductList.css";

const ProductList = ({ data, title, isLoading, error }) => {
  if (isLoading) return <p className="product-section__state">Загрузка {title}...</p>;
  if (error) return <p className="product-section__state">Ошибка при загрузке {title}</p>;

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
    <section className="product-section">
      <div className="product-section__header">
      <h2 className="product-section__title">{title}</h2>

      <NavLink to={routesMap[title] || "/"} className="product-section__link">
    
          Смотреть все
      </NavLink>
      </div>

      <div className="product-section__grid">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
