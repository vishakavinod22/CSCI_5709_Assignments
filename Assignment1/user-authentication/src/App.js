import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import ResetPassword from './Components/ResetPassword';
import './App.css';
import StaticPages from "./Components/StaticPages";

function App() {

  return (
    // https://www.makeuseof.com/redirect-user-after-login-react/
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/home" element={<StaticPages heading="Home"/>} />
          <Route path="/aboutus" element={<StaticPages heading="About Us"/>} />
          <Route path="/faqs" element={<StaticPages heading="FAQs"/>} />
          <Route path="/contactus" element={<StaticPages heading="Contact Us"/>} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
