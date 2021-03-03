import weCode from "../images/we-code.png";
// import macbook from "./images/macbook.png";
// import ourTeam from "./images/our-team.svg";

export const TopScreen = () => (
    <div className="top-screen">
        <div className="top-screen__macbook">
            <img className="top-screen__we-code-img" src={weCode} alt="we code"/>
            {/* <p className="top-screen__contact-us">contact us</p> */}
        </div>
    </div>
)