import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../header/header.css";

const slideImages = [
  { id: 1, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 2, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 3, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 4, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" }
];

export default function Slider() {
  return (
    <div className="  flex justify-center items-center  overflow-hidden">
      <div className="w-[600px] rounded-[16px] slide">
        <Slide duration={3000}
          transitionDuration={500}
          autoplay={true}
          infinite={true}
          arrows={true}
          indicators={true}
        >
          {slideImages.map((slide) => (
            <div key={slide.id} className="w-full h-full flex justify-center items-center">
              <img
                src={slide.image}
                alt={`slide-${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}