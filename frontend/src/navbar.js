// import logo from './logo.svg';
import './App.scss';
import React,{useState} from 'react';
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/Contact';
import Contact from './components/About';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import logo from './logo.png';
import Doctor from './components/Doctor';



function Navbar() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <Router>
      <div class="contain">
    <nav className='nav-head2  fixed-top'>
            <ul>
              <li><img src={logo} width='200px'></img></li>
             <li></li>
             <li>
            
        </li>
            </ul>
            <div className='nav-end'>
          <div class="nav-section nav-des-section">
          {/* <div class="nav-des-sub">DEPARTMENT OF UNDERGRADUATE COURSES</div>
          <div class="nav-des-sub"></div>  */}
          <div class="op-end">
          <div class="me-4"><FiSearch class="me-1"/>
             <input
            type="text"
            placeholder="Search.."
            /></div>
          <div class="me-4"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="text-light" />
          ) : (
            <RiMoonFill className=" dark:text-white" />
          )}
        </div>
          <Link to="login"><button type="button" class="nav-op btn me-4 justify-content-md-end">Login</button></Link>
          <Link to="register"> <button type="button" class="nav-op btn">Sign-Up</button></Link>
          </div>
      </div>
       </div>
        
    </nav>
    <header class="nav-head">
      <ul>
      <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="contact">Doctors</Link>
              </li>
              <li>
                <Link to="about">Patients</Link>
              </li>
        <li> <Link to="contact">Services</Link></li>
        <li> <Link to="contact">About us</Link></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </header>
    {/* <About/> */}
  <div class="">
     <Routes>
           <Route exact path='/' element={< Home />}></Route>
           <Route exact path='about' element={< About />}></Route>
           <Route exact path='contact' element={< Contact />}></Route>
           <Route exact path='login' element={<Login/>}></Route>
           <Route exact path='register' element={<Signup/>}></Route>
           <Route exact path='doctor_profile' element={<Doctor/>}></Route>

    </Routes>
    </div>
    </div>
 </Router>
  );
}

export default Navbar;
