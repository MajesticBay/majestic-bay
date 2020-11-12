import Line from "./Line";
import logo from "./images/majestic-bay.svg";
// import macbook from "./images/macbook.png";
import weCode from "./images/we-code.png";
import whatWeDo from "./images/what-we-do.svg";
// import ourTeam from "./images/our-team.svg";
import saveFit from "./images/save-fit.svg";
import "./scss/main.css";

function App() {
  return (
    <>
      <header className="header-container">
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
          <p className="header-description">We successfully solve business problems through design and code</p>
        </div>
        <Line />
        <Line color={"--dark"}/>
        <Line />
        <div className="main-content">
          <div className="main-content__bg"></div>
          <div className="main-content__story">
            <p>We are excellent experts. <span className="main-content__story--blue">Web design, UX research, app design, branding and logos, highly loaded backend, lightweight and responsive frontend</span> — we all know how to do it at the highest level.</p>
            <br/>
            <p>And most importantly — <span className="main-content__story--blue">we do not forget to solve the client's problem in the most optimal</span> and effective way.</p>
          </div>
          <div className="our-works">
            <h1 className="header">our<br/>works</h1>
            <p className="header-description">We do many projects and every job we do is a pride for us and our customers</p>
            <div className="project">
              <img src={saveFit} alt="save fit app"/>
              <p className="project__header">safe lit</p>
              <p className="project__description">Application, wich designed for people with spinal cord injuries, hernia or other problems that limit physical activity.</p>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default App;