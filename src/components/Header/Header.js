import React from "react";
import "./Header.css";
import topLogo from "../../assets/header/topLogo.jpg";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="LogoContainer">
        <img src={topLogo} alt="" className="topLogo" />
      </div>
      <div className="searchBar">
        <div className="searchContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="collections, items or user"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon}></img>
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
