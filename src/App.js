import logo from "./images/majestic-bay.svg";
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
          <h1 className="what-we-do__header">WHAT WE DO?</h1>
          <p className="what-we-do__content">We successfully solve business problems through design and code</p>
        </div>
      </main>
    </>
  );
}

export default App;