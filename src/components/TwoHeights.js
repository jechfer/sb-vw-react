import * as React from "react";
import img from '../assets/samples.jpg'
import img2 from '../assets/th2.jpg'
import '../styles/two-heights.scss'

function TwoHeigths() {
  return (
    <div className="container px-5 my-5  two-heights">
        {/* Este sería un componente */}
        <div className="box mx-4">
            <div className=" col-8 p-0">
                <div className="row p-5">
                    <div className="col justify-content-start">
                        <h2 className="box__title mt-4">Gratis Stoff- und Ledermuster anfordern</h2>
                        <p className="box__text mt-4">Gerne senden wir Ihnen vor der Bestellung kostenlos und unverbindlich Materialmuster zu. So können Sie in Ruhe zu Hause aussuchen, was Ihnen am besten gefällt und zu Ihrer Einrichtung passt.</p>
                        <button className="btn mt-4 text-uppercase box__button">Mehr erfahren</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="box overlay">
           <img className="box__image" src={img} alt="" />
        </div>
        {/* Hasta aquí */}
        <div className="mx-4 rest-overlay goes-under">
        <div className=" p-4">
                <div className="row p-5">
                    <div className="col-4"></div>
                    <div className="col-8 my-3">
                        <h2 className="box__title mt-4">Besuchen Sie Uns</h2>
                        <p className="box__text mt-4">Besuchen Sie uns in einem unserer Showrooms in Ihrer Nähe, sitzen Sie in entspannter Atmosphäre auf unseren Modellen zur Probe und lassen Sie sich von unseren Sofa-Experten beraten..</p>
                        <button className="btn mt-4 mb-4 text-uppercase box__button">Showroom Finden</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="box-rest">
            <img className="box__image-rest" src={img2} alt="" />
        </div>
    </div>
  );
}

export default TwoHeigths;

