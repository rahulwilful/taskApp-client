import "./Header.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = localStorage.getItem("taskUserId");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("taskUserName");
    localStorage.removeItem("taskUserEmail");
    localStorage.removeItem("taskUserId");
    localStorage.removeItem("taskUserToken");
  };

  return (
    <header>
      <div className="navbar">
        <button className="logo">
          <Link to="/home">
            <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path>{" "}
            </svg>
          </Link>
        </button>
        <nav>
          <div className="nav-items">
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout}>
                  <Link className="nav-item">Logout</Link>
                </button>
                <button>
                  <Link className="nav-item" to="/home">
                    Home
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button>
                  <Link className="nav-item" to="/">
                    Signin
                  </Link>
                </button>
                <button className="nav-item">
                  <Link to="/register">SignUp</Link>
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
