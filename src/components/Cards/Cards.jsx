import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../Store/FavouritesSlice";
import { addToCart } from "../../Features/Cart/CartSlice";



const Cards = ({ item }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state)=> state.favourites)

  if (!item) {
    return null; 
  }

  const isFav = favourites.some((fav)=>fav.id === item.id)

  return (
    <div className="flex items-center justify-center gap-2 p-5 rounded-2xl bg-white w-96 hover:scale-105 hover:shadow-2xl relative transition">
      <div className="flex-col gap-2 w-[370px] ">

      <div className="absolute top-3 left-3 flex gap-2">
        {item.tags?.includes("hit") && (
          <span className="bg-[#FBDCD5] text-[#FF6633] font-bold text-2xl px-3 py-1 rounded-lg">Hit</span>
        )}
          {item.tags?.includes("new") && (
            <span className="bg-[#CCF5D5] text-[#00CC2D] font-bold text-2xl px-3 py-1 rounded-lg">New</span>
          )}
        </div>

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
          {/* Избранное  */}
        <button
        onClick={() => dispatch(toggleFavourite(item))} 
        className="bg-[#F5F5F7] p-3 rounded-[10px] cursor-pointer hover:scale-120">
          
          <img 
          src={isFav ? "/Icons/Navbar_Icons/HeartFilled.svg"  : "/Icons/Navbar_Icons/Heart.svg"}
          alt="heart_button" />
          
        </button>

        {/* Корзина */}
        <button 
        onClick={()=> dispatch(addToCart(item))}
        className="w-20 bg-[#CCF5D5] text-4xl p-2 rounded-[10px]">+</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
