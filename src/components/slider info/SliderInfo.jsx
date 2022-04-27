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
        slidesToScroll: 1
    }
    return (
        <div>
            <div>
                <Slider {...settings}>
                    <div>
                        <InfoCard />
                    </div>
                    <div>
                        <InfoCard />
                    </div>
                    <div>
                        <InfoCard />
                    </div>
                    <div>
                        <InfoCard />
                    </div>
                    <div>
                        <InfoCard />
                    </div>
                    <div>
                        <InfoCard />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderInfo;