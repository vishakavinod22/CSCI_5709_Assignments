import Navbar from './Navbar';
import './styles.css';
import loginImg from '../images/login-image.png';
import googleIcon from '../images/search.png';

function Login(){
    const handleGoogleLoginBtnClick = (event) => {
        event.preventDefault();
    };

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
                        <div className="p-3 login-form-container">
                            <form className="login-form">
                                {/* Username input field */}
                                <div className="form-input">
                                    <input type="email" name="username" placeholder='Enter Username' required/>
                                </div>
                                <div className="form-input">
                                    <input className="form-input" type="password" name="password" placeholder='Enter Password' required/>
                                </div>
                                <div className="forgot-password">
                                    <a href='#'>Forgot Password?</a>
                                </div>
                                <div className="form-input">
                                    <input className='login-btn' type="submit" value="LOGIN" />
                                </div>
                                {/**  chatGPT **/}
                                <div className="divider">
                                    <span className="divider-text">or</span>
                                </div>
                                {/**  chatGPT **/}
                                <button className="google-login-btn" onClick={handleGoogleLoginBtnClick}>
                                    <img src={googleIcon} alt="Google icon" className="google-icon" />
                                    Login with Google
                                </button>
                            </form>
                        </div>
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