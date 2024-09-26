import majesticLogo from './assets/logo.png'
import './css/main.css'

function App() {

  return (
    <>
      <div>
        <a href="https://majesticbay.net/" target="_blank">
          <img src={majesticLogo} className="logo" alt="Majestic Bay logo" />
        </a>
      </div>
      <div className="sign">
        <h1>We always solve the client's problem</h1>
        <h1>in  most optimal and effective way.</h1>
      </div>
      <div className="card">
        <p>
          CONTACT US
        </p>
      </div>
      <p className="footer">
        © 2018—2024 mb
      </p>
    </>
  )
}

export default App
