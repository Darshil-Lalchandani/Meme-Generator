import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="carousel-header"> Browse and select templates </h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {props.imgArr.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={props.handleImgClick}
            >
              <img
                src={image.url}
                alt={`meme-${index}`}
                height="120px"
                width="120px"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
