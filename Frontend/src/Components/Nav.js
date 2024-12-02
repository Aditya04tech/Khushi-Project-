import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useUser } from '../context/UserContext'; // Importing UserContext

const Nav = ({ cartCount }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useUser(); // Access user and logout from context

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Collapse navbar on scroll (mobile view)
    const handleScroll = () => {
      const navbarCollapse = document.getElementById('navbarCollapse');
      const navbarToggler = document.querySelector('.navbar-toggler');
      
      if (
        navbarToggler &&
        window.getComputedStyle(navbarToggler).display !== 'none' &&
        navbarCollapse.classList.contains('show')
      ) {
        navbarCollapse.classList.remove('show'); // Collapse the navbar
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    logout(); // Call logout from context
    navigate("/signin");
  };

  const name = user?.name || "User";
  const email = user?.email || "Email not available";

  return (
    <header className="navbar-light navbar-sticky-on header-static">
      <nav className="navbar navbar-expand-xl sticky-top">
        <div className="container-fluid px-3 px-xl-5">
          <Link className="navbar-brand" to="/">
            <img
              className="light-mode-item logo navbar-brand-item"
              src="assets/images/LMS.png"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Course"
                  id="courseDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="courseDropdown">
                  <li><Link className="dropdown-item" to="/course">Networking</Link></li>
                  <li><Link className="dropdown-item" to="/frontendcourse">Front-end</Link></li>
                  <li><Link className="dropdown-item" to="/backendcourse">Back-end</Link></li>
                  <li><Link className="dropdown-item" to="/digitalmarketing">Digital Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/graphicscourse">Graphics Designing</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coursecategory">Packages</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dashboardDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
                  <li><Link className="dropdown-item" to="/admin-dashboard">Admin</Link></li>
                  <li><Link className="dropdown-item" to="/instructordashboard">Instructor</Link></li>
                  <li><Link className="dropdown-item" to="/studentdashboard">Student</Link></li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-3">
              <div className="position-relative">
                <Link to="/cart">
                  <IoMdCart size={28} />
                  <span> ({cartCount})</span>
                </Link>
              </div>  

              {user ? ( 
                <div className="dropdown ms-3" ref={dropdownRef}>
                  <button className="btn p-0" onClick={toggleDropdown}>
                    <FaUserCircle size={28} />
                  </button>
                  {dropdownOpen && (
                    <ul className="dropdown-menu dropdown-menu-end show mt-3">
                      <li className="dropdown-item-text">
                        <strong>{`Welcome, ${name}`}</strong>    
                        <p className="small mb-0">{` ${email}`}</p>  
                      </li>
                      <div className="dropdown-divider"></div>
                      <li>
                        <Link className="dropdown-item" to="/studenteditprofile">Edit Profile</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile">Account Settings</Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item bg-danger-soft-hover"
                          onClick={handleLogoutClick}
                        >
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <ul className="navbar-nav sign ms-3">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
