const Cards = ({ sushi }) => {
  if (!sushi) {
    return null; 
  }

  return (
    <div className="flex items-center justify-center p-5 rounded-2xl">
      <div>
        <img src={sushi.image} alt={sushi.name} />
        <h1>{sushi.name}</h1>
      </div>

      <div>
        <p>{sushi.weight}</p>
        <p>{sushi.description}</p>
      </div>

      <div>
        <p>
          {sushi.price} <span>грн</span>
        </p>
        <button>
          <img src="/Icons/Navbar_Icons/Heart.svg" alt="heart_button" />
        </button>
        <button>+</button>
      </div>
    </div>
  );
};

export default Cards;
