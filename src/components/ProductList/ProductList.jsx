import Cards from "../Cards/Cards";

const ProductList = ({ data, title, isLoading, error }) => {
  if (isLoading) return <p>Загрузка {title}...</p>;
  if (error) return <p>Ошибка при загрузке {title}</p>;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 ml-20">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
