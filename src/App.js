import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import Mainviewer from "./components/MainViewer/Mainviewer";
import ApeList from "./components/ApeList/ApeList";

const App = () => {
  const [collections, setCollections] = useState([]);
  const [selectedApe, setSelectedApe] = useState(0);

  useEffect(() => {
    const getMyNft = async () => {
      const openSeaData = await axios.get(
        "/assets?asset_contract_address=0x6AE79fDE227e305fB1449349de6DC557a9dD513A"
      );
      setCollections(openSeaData.data.assets);
    };

    getMyNft();
  }, []);

  return (
    <div className="app">
      <Header />
      {collections.length > 0 && (
        <>
          <Mainviewer collections={collections} selectedApe={selectedApe} />
          <ApeList collections={collections} setSelectedApe={setSelectedApe} />
        </>
      )}
    </div>
  );
};

export default App;
