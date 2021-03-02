import { Header } from './components/Header';
import { TopScreen } from './components/TopScreen';
import { WhatWeDo } from './components/WhatWeDo';
import { MovingLines } from './components/MovingLines';
import { OurTeam } from './components/OurTeam';
import { OurWorks } from './components/OurWorks';
import Line from "./components/Line";
// import macbook from "./images/macbook.png";
// import ourTeam from "./images/our-team.svg";
import "./scss/main.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <TopScreen />
        {/* <div className="what-we-do">
          <img className="what-we-do__img-header" src={whatWeDo} alt="what we do"/>
          <p className="what-we-do__content">We successfully solve business problems through design and code</p>
        </div>
        <Line />
        <Line color={"--dark"}/>
        <Line /> */}
        <WhatWeDo />
        <MovingLines />
        <div className="main-content">
          <div className="main-content__bg">
            <div className="main-content__story">
              <p>We are excellent experts. <span className="main-content__story--blue">Web design, UX research, app design, branding and logos, highly loaded backend, lightweight and responsive frontend</span> — we all know how to do it at the highest level.</p>
              <br/>
              <p>And most importantly — <span className="main-content__story--blue">we do not forget to solve the client's problem in the most optimal</span> and effective way.</p>
            </div>
            <OurWorks />
          </div>
          <OurTeam />
        </div>
      </main>
    </>
  );
}

export default App;