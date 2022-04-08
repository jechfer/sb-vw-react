import * as React from "react"
import car1 from '../assets/carousel1.png'
import img2 from '../assets/img2.png'
import img4 from '../assets/img4.png'
import { Carousel } from "react-bootstrap"
import { useState } from "react"
import '../styles/carousel.scss'

function CarouselBestSeller() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="container px-5  mt-4">

            <h2 className="card-title">Beliebte Produkte</h2>
            <div className="row justify-content-end">
                <div className="controls-top">
                    <a className="btn-floating bg-danger" href="#bestSeller" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>
            </div>

        <Carousel id="bestSeller" activeIndex={index} onSelect={handleSelect} variant="dark" interval={null} indicators={false}  >
            <Carousel.Item>
                <div className="row jusyify-content-between px-5 py-3">
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={car1}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={img2}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={car1}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row jusyify-content-between px-5 py-3">
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={img2}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={car1}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                    <div className="col-4  p-3 carousel__item m-2">
                        <div className="carousel__image">
                            <img className="mt-5 p-2 d-block w-100" src={img4}  alt="First slide" />
                        </div>
                        <div className="carousel__info text-start mb-2 px-3">
                             <h6 className="carousel__info--title mb-2">Chesterfield Sofa Carnaby</h6>
                            <span className="carousel__info--price">3.869 EUR</span>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
         </Carousel>
        </div>

    );
  }

  export default CarouselBestSeller