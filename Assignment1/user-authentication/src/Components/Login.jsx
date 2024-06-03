import Navbar from './Navbar';
import './styles.css';
import loginImg from '../images/login-image.png';

function Login(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-3 img-col">
                            <img src={loginImg} alt="Image of an event stall" id="login-img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 login-form">Column 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

/**
 * Image taken and modified from: https://www.canva.com/templates/EAFweV1TAJ8-company-website-business-website-in-blue-white-black-2d-illustration-style/
 * 
 */