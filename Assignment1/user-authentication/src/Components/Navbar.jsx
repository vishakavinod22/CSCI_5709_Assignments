import './styles.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import hamburgerIcon from '../images/hamburger.png';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo for EventAura" id="logo-img" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src={hamburgerIcon} alt="hamburger icon" id="hamburger-icon"/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link"> About Us </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/faqs" className="nav-link"> FAQs </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/contactus" className="nav-link"> Contact Us </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;