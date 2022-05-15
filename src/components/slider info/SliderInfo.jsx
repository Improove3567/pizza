import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfoCard from "../InfoCard/InfoCard";

function SliderInfo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };



  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <InfoCard />
          </div>
          <div>
            <div className="container">
              <img
                src= "https://cdn.inappstory.com/story/sgt/vc5/j8j/ydihi4ce5hyflx9a9ctycnw/custom_cover/logo-350x440.jpg?v=1652289011"
                alt="failed"
                className="slider_info_img"
              ></img>
            </div>
          </div>
          <div>
          <div className="container">
              <img
                src= "https://cdn.inappstory.com/story/lyg/qk5/2xt/8eqvh2nzksa8uk4da8uok9u/custom_cover/logo-350x440.jpg?v=1652289494"
                alt="failed"
                className="slider_info_img"
              ></img>
            </div>
          </div>
          <div>
          <div className="container">
              <img
                src= "https://cdn.inappstory.com/story/jo5/pnh/dlo/uwznxlrnvcfic4xs6g0m4oe/custom_cover/logo-350x440.jpg?v=1651837167"
                alt="failed"
                className="slider_info_img"
              ></img>
            </div>
          </div>
          <div>
          <div className="container">
              <img
                src= "https://cdn.inappstory.com/story/1cm/poe/jbb/rdqkh8nffihrtgrbz82nrit/custom_cover/logo-350x440.jpg?v=1645505461"
                alt="failed"
                className="slider_info_img"
              ></img>
            </div>
          </div>
          <div>
          <div className="container">
              <img
                src= "https://cdn.inappstory.com/story/wwh/egw/uff/fftdvieosrqoqkn6cvhunht/custom_cover/logo-350x440.jpg?v=1652288182"
                alt="failed"
                className="slider_info_img"
              ></img>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default SliderInfo;
