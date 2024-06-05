import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import ResetPassword from './Components/ResetPassword';
import './App.css';
import StaticPages from "./Components/StaticPages";
import Static from "./Components/Static";

function App() {

  return (
    // https://www.makeuseof.com/redirect-user-after-login-react/
    <div>
      <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<UserProfile />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/home" element={<Static heading="Home"/>} />
              <Route path="/about" element={<StaticPages value="About Us" />} />
              <Route path="/faqs" element={<StaticPages value="FAQs" />} />
              <Route path="/contact" element={<StaticPages value="Contact Us" />} />
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
