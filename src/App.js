import logo from "./images/majestic-bay.svg";
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
        </div>
        <div className="what-we-do">
          <img className="what-we-do__img-header" src={whatWeDo} alt="what we do"/>
          <p className="what-we-do__content">We successfully solve business problems through design and code</p>
        </div>
      </main>
    </>
  );
}

export default App;