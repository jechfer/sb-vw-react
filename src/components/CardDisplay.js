import * as React from "react"
import Card from "./Card";
import CardFilling from "./CardFilling";

function CardDisplay() {
  return (
    <div className="container">
        <div className="">
            <CardFilling/>
            <Card/>
        </div>
    </div>
  );
}

export default CardDisplay;
