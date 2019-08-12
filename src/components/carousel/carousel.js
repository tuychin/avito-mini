import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const Carousel = ({ images }) => {

  console.log(images);
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="carousel">
      <Slider {...sliderSettings}>
      {
        images.map((imgUrl) => {
          return (
            <div className="carousel__slide">
              <img src={`http:${imgUrl}`} alt={`http:${imgUrl}`}/>
            </div>
          )
        })
      }
      </Slider>
    </div>
  );
}

export default Carousel;