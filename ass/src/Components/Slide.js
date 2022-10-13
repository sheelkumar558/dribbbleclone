import "./slide.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Slide = () => {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <img
            src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/06bc6339376b3706107a2417504fb7bc.png"
            alt=""
            height="350px"
            width="200px"
          />
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/9ded35f5d4db48b0a38d70128775e8c4.png"
            alt=""
            height="350px"
            width="200px"
          />
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/67e48efc54b41af96fdceb1eb2f1e8fa.png"
            alt=""
            height="350px"
            width="200px"
          />
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/4196572828305b986d6757de36bc973b.png"
            alt=""
            height="350px"
            width="200px"
          />
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/caaa58fdb069912de2b13f0a049959ea.png"
            alt=""
            height="350px"
            width="200px"
          />
        </div>
      </Carousel>
    </>
  );
};
