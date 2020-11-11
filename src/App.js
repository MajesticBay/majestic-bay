import Line from "./Line";
import logo from "./images/majestic-bay.svg";
// import macbook from "./images/macbook.png";
import weCode from "./images/we-code.png";
import whatWeDo from "./images/what-we-do.svg";
// import ourTeam from "./images/our-team.svg";
import "./scss/main.css";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo"/>
      </header>
      <main className="main">
        <div className="top-screen">
          <div className="top-screen__macbook">
            <img className="top-screen__we-code-img" src={weCode} alt="we code"/>
          </div>
        </div>
        {/* <div className="what-we-do">
          <img className="what-we-do__img-header" src={whatWeDo} alt="what we do"/>
          <p className="what-we-do__content">We successfully solve business problems through design and code</p>
        </div>
        <Line />
        <Line color={"--dark"}/>
        <Line /> */}
        <div className="what-we-do">
          <img className="what-we-do__img-header" src={whatWeDo} alt="what we do"/>
          <p className="what-we-do__content">We successfully solve business problems through design and code</p>
        </div>
        <Line />
        <Line color={"--dark"}/>
        <Line />
        <div className="main-content">
          <div className="main-content__bg"></div>
          
        </div>

      </main>
    </>
  );
}

export default App;