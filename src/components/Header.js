import logo from "../images/majestic-bay.svg";

export const Header = () => (
    <header className="header-container">
        <a className="header-container__link">
            <img className="header-container__logo" src={logo} alt="logo"/>
            <p className="header-container__contact-us">contact us</p>
        </a>
    </header>
)