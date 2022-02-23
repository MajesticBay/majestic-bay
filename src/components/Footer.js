import logo from '../images/majestic-bay.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" />
            <p className="footer__text">© 2018–2022 Majestic Bay</p>
        </div>
    )
}