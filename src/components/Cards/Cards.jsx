import React from 'react'

const Cards = ({sushi}) => {
  return (
    <>
    <div className="flex items-center justify-center p-5 rounded-2xl">
        <div className="">
            <img src={sushi.image} alt={sushi.name} />
            <h1>{sushi.name}</h1>
        </div>

        <div className="">
            <p>{sushi.weight}</p>
            <p>{sushi.description}</p>
        </div>

        <div className="">
            <p>{sushi.price} <span>грн</span></p>
            <button><img src="../../../public/Icons/Navbar_Icons/Heart.svg" alt="heart_button" /></button>
            <button>+</button>
        </div>
    </div>
    </>
  )
}

export default Cards