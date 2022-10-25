import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./ApeList.css";

const ApeList = ({ collections, setSelectedApe }) => {
  return (
    <div className="apeList">
      {collections.map((nft, index) => (
        <div key={nft.id} onClick={() => setSelectedApe(index)}>
          <CollectionCard
            id={nft.token_id}
            name={nft.name}
            traits={nft.traits}
            image={nft.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default ApeList;
