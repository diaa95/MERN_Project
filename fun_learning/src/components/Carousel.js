import React from "react";
import Slide1 from "../static/img/slide1.PNG";
import Slide2 from "../static/img/slide2.PNG";
import Slide3 from "../static/img/slide3.PNG";
import Slide4 from "../static/img/slide4.PNG";
/* import Slide5 from "../static/img/slide5.jpg";
import Slide6 from "../static/img/slide6.jpg";
import Slide7 from "../static/img/slide7.jpg"; */

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 carousel-img"
                src={Slide1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 carousel-img"
                src={Slide2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 carousel-img"
                src={Slide3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100 carousel-img"
                src={Slide4}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
