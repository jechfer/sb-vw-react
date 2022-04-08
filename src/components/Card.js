import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img4 from '../assets/img4.png'
import '../styles/card.scss'

function Card() {
  return (
    <div className="row mx-5">
        <div className="col-sm-12 col-md-6 mb-5">
            <div className="card mx-auto px-5 pt-5">
                <div className="card__image mt-5 p-4">
                    <img src={img2} alt="" className="card__image--normal" />
                </div>

                <div className="card__info text-start mt-3 pt-5">
                    <h6 className="card__info--title mb-2">Timeless Modern</h6>
                    <a className="card__info--link" href="/">Jetzt Entdecken</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-5 ">
            <div className="card mx-auto px-5 pt-5">
                <div className="card__image mt-5 p-4">
                    <img src={img2} alt="" className="card__image--normal" />
                </div>

                <div className="card__info text-start mt-3 pt-5">
                    <h6 className="card__info--title mb-2">Classic Chesterfield</h6>
                    <a className="card__info--link" href="/">Jetzt Entdecken</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-5">
            <div className="card mx-auto px-5 pt-5">
                <div className="card__image mt-5 p-4">
                    <img src={img4} alt="" className="card__image--normal" />
                </div>

                <div className="card__info text-start mt-3 pt-5">
                    <h6 className="card__info--title mb-2">Design Schlafsofa</h6>
                    <a className="card__info--link" href="/">Jetzt Entdecken</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-5 ">
            <div className="card mx-auto px-5 pt-5">
                <div className="card__image mt-5 p-4">
                    <img src={img} alt="" className="card__image--normal" />
                </div>

                <div className="card__info text-start mt-3 pt-5">
                    <h6 className="card__info--title mb-2">Cozy Comfort</h6>
                    <a className="card__info--link" href="/">Jetzt Entdecken</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
