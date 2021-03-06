import bg from "../images/bg.png";
import mac from "../images/macbook.png";
import iphone from "../images/iphone.png";
import weCode from "../images/we-code.png";
import weCodeMobile from "../images/wecode-mobile.png";

export const TopScreen = () => {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div className="app-container" style={bgStyle}>
      <div className="macbook-screen">
        <img src={mac} alt="" className="desktop" />
        <img src={iphone} alt="" className="mobile" />
        <div className="wecode-img-wrap">
          <img src={weCode} alt="" className="we-code-desktop" />
          <img src={weCodeMobile} alt="" className="we-code-mobile" />
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
