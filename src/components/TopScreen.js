import React from 'react';
import bg from '../images/bg.png';
import mac from '../images/macbook.png';
import iphone from '../images/iphone.png';
import weCode from '../images/we-code.png';
import weCodeMobile from '../images/wecode-mobile.png';
import logo from '../images/logo.png';
import logoMobile from '../images/logo-mobile.png';

export const TopScreen = () => {
  const bgStyle = {
    backgroundImage: `url(${bg})`
  };

  return (
    <div className="app-container" style={bgStyle}>
      <div className="app-logo">
        <a href="http://localhost:3000" className="app-logo__desktop-link">
          <img src={logo} alt="logo" className="desktop-logo" />
          <p>contact us</p>
        </a>
        <a href="http://localhost:3000" className="app-logo__mobile-link">
          <img src={logoMobile} alt="logo" className="mobile-logo" />
          <p>contact us</p>
        </a>
      </div>
      <div className="macbook-screen">
        <img src={mac} alt="macbook frame desktop" className="desktop-screen" />
        <img src={iphone} alt="phone frame mobile" className="mobile-screen" />
        <div className="wecode-img-wrap">
          <img src={weCode} alt="we code text desktop" className="we-code-desktop" />
          <img src={weCodeMobile} alt="we code text mobile" className="we-code-mobile" />
        </div>
      </div>
      <div className="wecode-wrap">
        <div className="wecode-text">
          <h1>
            what <br /> we do?
          </h1>
          <p>
            We successfully solve <br /> business problems through <br /> design and code
          </p>
        </div>
      </div>
    </div>
  );
};
