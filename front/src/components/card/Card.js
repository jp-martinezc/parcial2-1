import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { FormattedMessage } from "react-intl";

export const Card = (props) => {

  
let name = props.info.name;
if(props.info.name === "Living room")
{
name = "livingroom";
}
else if(props.info.name === "Kitchen")
{
  name = "kitchen"
}
else if(props.info.name === "Dinner room")
{
  name = "dinnerroom"
}
 
  return (
    <div className="card card-home">
      <Link className="card-home-img-link" to={`/homes/${props.info.id}`}>
        {props.type === "house" ? (
          <img src="/home.png" className="card-home-img-top" alt="Icon Home" />
        ) : (
          <img
            src="/loft.png"
            className="card-home-img-top loft"
            alt="Icon Loft"
          />
        )}
      </Link>
      <div className="card-home-body">
        <div className="card-home-body-description">
          <h5 className="card-home-title"><FormattedMessage id={name}/>  </h5>
          <p className="card-home-text"> {props.info.address} </p>
          
        </div>
      </div>
    </div>
  );
};
