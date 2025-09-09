const Cards = ({ item }) => {
  if (!item) {
    return null; 
  }

  return (
    <div className="flex items-center justify-center gap-2 p-5 rounded-2xl bg-white w-96 hover:scale-105 hover:shadow-2xl">
      <div className="flex-col gap-2 w-[370px] ">

      <div className="flex flex-col">

      <div className="">
        <img src={item.image} alt={item.name} />
        <h1 className="text-3xl font-bold m-2">{item.name}</h1>
      </div>

      <div>
        <p className="text-[#FF6633] text-[20px] m-2">{item.weight}</p>
        <p className="text-[#686870] m-2">{item.description}</p>
      </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold text-4xl">
          {item.price} <span className="text-gray-700">грн</span>
        </p>

        <div className="flex gap-4 items-center justify-center">
        <button className="bg-[#F5F5F7] p-3 rounded-[10px] ">
          <img src="/Icons/Navbar_Icons/Heart.svg" alt="heart_button" />
        </button>
        <button className="w-20 bg-[#CCF5D5] text-4xl p-2 rounded-[10px]">+</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
