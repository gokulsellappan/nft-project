import React, { useState } from "react";
import "./CollectionCard.css";
import eth from "../../assets/eth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  let ipfs = image.split("//");

  const condition = (traits) => {
    return (
      traits[0] != undefined &&
      traits[1] != undefined &&
      traits[1].trait_type != undefined &&
      traits[0].trait_type != undefined &&
      traits[1].trait_type == "price"
    );
  };

  return (
    <div className="collectionCard">
      <img src={"https://ipfs.io/ipfs/" + ipfs[1]} />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={eth} className="ethImage" />
          <div className="price">
            {condition(traits)
              ? traits[1].value
              : traits[0].trait_type == "price"
              ? traits[0].value
              : "No value"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
