import * as React from "react"
import '../styles/cta.scss'
import  icon from '../assets/icon.svg'
function Cta() {
  return (
    <div className="container">
        <div className="banner align-items-center pt-1">
            <div className="row justify-content-around  pt-2">
                <div className="col-auto">
                    <div className="row banner__item">
                        <span className="col-auto banner__item--icon p-0"> <img src={icon} alt="" /></span>
                        <div className="col-auto banner__item--text px-1">Handgefertigte Qualität</div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="row banner__item">
                        <span className="col-auto banner__item--icon p-0"> <img src={icon} alt="" /></span>
                        <div className="col-auto banner__item--text px-1">Auswahl an 120 Bezügen</div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="row banner__item">
                        <span className="col-auto banner__item--icon p-0"> <img src={icon} alt="" /></span>
                        <div className="col-auto banner__item--text px-1">Gratis 2-Mann Lieferung</div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="row banner__item">
                        <span className="col-auto banner__item--icon p-0"> <img src={icon} alt="" /></span>
                        <div className="col-auto banner__item--text px-1">Sehr gut <strong>4,87</strong> von 5 <strong>Trustedshops</strong> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cta;
