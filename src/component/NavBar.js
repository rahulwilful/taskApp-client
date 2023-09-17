import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isLoggedIn = localStorage.getItem("taskUserId");

  return (
    <div className="contaner-fluid">
      <nav className="mainNav">
        <div className="logo">
          <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {" "}
            <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path>{" "}
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

/*
<div className="menuItems">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Logout</Link>
            </li>
            <li>
              <Link to="">SignIn</Link>
            </li>
            <li>
              <Link to="">SignUp</Link>
            </li>
          </ul>
        </div>

////////////////////////////////////////////////////////////////


{isLoggedIn ? (
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link  to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          ) : null}

          {!isLoggedIn ? (
            <ul>
              <li>
                <Link to="">SignIn</Link>
              </li>
              <li>
                <Link to="">SignUp</Link>
              </li>
            </ul>
          ) : null} */
