import * as React from "react";
import '../styles/half-width.scss'
import img from '../assets/hw-1.jpg';
import img2 from '../assets/hw-2.jpg'

function HalfWidth() {
  return (
    <div className="container half-width px-5 pt-5 my-5 ">
        <div className="row mx-4 px-2">
            <div className="col-6 p-0">
                <img className="slide__left slide__img" src={img} alt="" />
            </div>
            <div className="col-6 slide__right slide__info px-5 ">
                <h3 className="slide__info--title mt-5">Zeitlos schönes Interior Design und ausgewählte Designermöbel</h3>
                <p className="slide__info--text mt-4">
                Wir bei VON WILMOWSKY plädieren für alles Schöne und Stilvolle, das unseren Alltag veredelt und unserem Zuhause besondere Werte verleiht. VON WILMOWSKY Sofas werden zusammen mit internationalen Designern entworfen und nach höchsten Qualitätsstandards in Europa von Hand gefertigt.
                </p>

            </div>
        </div>
        {/* Aquí ya acaba */}
        <div className="row mt-5 mx-4 px-2">
            <div className="col-6 slide__left slide__info px-5 ">
                <h3 className="slide__info--title mt-5">Design-Möbel in höchster Qualität und mit Preisen in Reichweite</h3>
                <p className="slide__info--text mt-4">
                Jeden Tag widmen wir uns voller Leidenschaft der Aufgabe, umwerfend schöne und erstklassige Designermöbel für Sie zu fertigen. Wir sind stolz auf unsere einmalige Auswahl an modernen Design Sofas genauso wie über ein ausgesuchtes Angebot an Chesterfield Sofas.
                </p>
                <p className="slide__info--text">Auch bequeme und zugleich funktionale Polstermöbel wie z.B. ein Schlafsofa, ein Ledersofa oder einen Ohrensessel bieten wir in unserer unverwechselbaren Designwelt an. In der Produktion unseres Sofa Sortiments legen wir höchsten Wert auf Qualität der Materialien und besonderen Komfort. Das Bewusstsein für traditionelles Manufaktur-Handwerk ist dabei immer präsent.</p>
            </div>
            <div className="col-6  p-0">
                <img className="slide__img slide__right" src={img2} alt="" />
            </div>

        </div>
    </div>
  );
}

export default HalfWidth;
