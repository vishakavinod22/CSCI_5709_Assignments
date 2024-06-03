import './styles.css';
import logo from '../images/logo.png';
import hamburgerIcon from '../images/hamburger.png';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo for EventAura" id="logo-img" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src={hamburgerIcon} alt="hamburger icon" id="hamburger-icon"/></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


/*
 * logo designed using Canva: https://www.canva.com/design/DAGHBrzDjQA/7-KULDYOskRgdnATQDIR6g/edit?utm_content=DAGHBrzDjQA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

 * hamburger icon from : <div> Icons made by <a href="https://www.flaticon.com/authors/lizel-arina" title="Lizel Arina"> Lizel Arina </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

 * Navbar code taken from: https://getbootstrap.com/docs/5.1/components/navbar/

 * changed the nav-items, styling, alignment
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 */