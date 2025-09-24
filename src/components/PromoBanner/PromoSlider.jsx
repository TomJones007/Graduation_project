import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../header/header.css";
import "./PromoSlider.css";

const slideImages = [
  { id: 1, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 2, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 3, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
  { id: 4, image: "/Icons/PromoBanner_Icons/FilaLosos.svg" },
];

export default function PromoSlider() {
  return (
    <section className="promo-slider">
      <div className="promo-slider__inner">
        <Slide duration={3000}
          transitionDuration={500}
          autoplay={true}
          infinite={true}
          arrows={true}
          indicators={true}
        >
          {slideImages.map((slide) => (
            <div key={slide.id} className="promo-slider__slide">
              <img
                src={slide.image}
                alt={`slide-${slide.id}`}
                className="promo-slider__image"
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}