import React from "react";

import image from "../../assets/image.png";
import img from "../../assets/img.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        CryptoCurrency <span>App</span>
      </h1>
      <div className="header-img">
        <img className="image" src={image} alt="" />
      </div>
      <h2 className="subtitle">Data</h2>
      <img className="img" src={img} alt="" />
    </header>
  );
};

export default Header;
