import React, { useEffect, useState } from "react";
import instagram from "../../assets/owner/instagram.png";
import more from "../../assets/owner/more.png";
import twitter from "../../assets/owner/twitter.png";
import "./Mainviewer.css";

const Mainviewer = ({ selectedApe, collections }) => {
  const [activeApe, setActiveApe] = useState(collections[selectedApe]);
  let url = activeApe.image_original_url;
  let ipfs = url.split("//");
  useEffect(() => {
    setActiveApe(collections[selectedApe]);
  }, [collections, selectedApe]);

  return (
    <div className="mainViewer">
      <div className="mainContent">
        <div className="apeHighLight">
          <div className="apeContainer">
            <img
              src={"https://ipfs.io/ipfs/" + ipfs[1]}
              className="selectedApe"
            />
          </div>
        </div>
        <div className="apeDetails" style={{ color: "#fff" }}>
          <div className="apeTitle">
            {activeApe.name}
            <span className="itemNumber">.#{activeApe.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeApe.owner.profile_img_url} />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeApe.creator.address}</div>
                <div className="ownerHandle">@gokulsellappan</div>
              </div>
              <div className="ownerLink">
                <img src={instagram} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitter} alt="" />
              </div>
              <div className="ownerLink">
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainviewer;
