import * as React from "react";
import img from '../assets/img-two-widths.jpg'
import '../styles/two-widths.scss'

function TwoWidths() {
  return (
    <div className="container px-5 my-5 ">
        <div className="row mx-4 px-2">
            <div className="col-8 p-0">
                <img className="banner__img" src={img} alt="" />
            </div>
            <div className="col-4 banner__info p-5 ">
                <h3 className="banner__info--title mt-5">Sofort <br /> Lieferbare Sofas</h3>
                <p className="banner__info--text mt-4">
                Sie wollen Ihr handgefertigtes Sofa innerhalb kurzer Zeit zu Ihnen nach Hause geliefert bekommen?
                </p>
                <p className="banner__info--text mt-4">
                Entdecken Sie unsere ausgewählten Sofa-Highlights mit Lieferzeit 2 - 4 Wochen.
                </p>
                <button className="btn mt-4 text-uppercase banner__button">Mehr erfahren</button>

            </div>
        </div>
    </div>
  );
}

export default TwoWidths;
