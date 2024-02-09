import React from "react";
import BG from "../images/bg.png";
import Mac from "../images/macbook.png";
import Iphone from "../images/iphone.png";
import WeCode from "../images/we-code.png";
import WeCodeMobile from "../images/wecode-mobile.png";
import Logo from "../images/logo.png";
import LogoMobile from "../images/logo-mobile.png";

export const TopScreen: React.FC = () => {
  const bgStyle = {
    backgroundImage: `url(${BG})`,
  };

  return (
    <div className="app-container" style={bgStyle}>
      <div className="app-logo">
        <img src={Logo} alt="logo" className="desktop-logo" />
        <img src={LogoMobile} alt="logo" className="mobile-logo" />
        <a href="http://localhost:3000">contact us</a>
      </div>
      <div className="macbook-screen">
        <img src={Mac} alt="macbook frame desktop" className="desktop-screen" />
        <img src={Iphone} alt="phone frame mobile" className="mobile-screen" />
        <div className="wecode-img-wrap">
          <img src={WeCode} alt="we code text desktop" className="we-code-desktop" />
          <img src={WeCodeMobile} alt="we code text mobile" className="we-code-mobile" />
        </div>
      </div>
      <div className="wecode-wrap">
        <div className="wecode-text">
          <h1>
            what <br /> we do?
          </h1>
          <p>
            We successfully solve <br /> business problems through <br /> design
            and code
          </p>
        </div>
      </div>
    </div>
  );
};