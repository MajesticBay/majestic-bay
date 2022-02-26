import weCode from '../images/we-code.png';
import weCodeMobile from '../images/we-code-mobile.svg';
// import macbook from "./images/macbook.png";
// import ourTeam from "./images/our-team.svg";

export const TopScreen = () => (
  <div className="top-screen">
    <div className="top-screen__macbook">
      <img className="top-screen__we-code-img-mobile" src={weCodeMobile} alt="we code" />
      <img className="top-screen__we-code-img" src={weCode} alt="we code" />
    </div>
  </div>
);
