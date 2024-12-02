import React, { useState, useEffect } from 'react';
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";


const Nav1 = () => {
  const [cartItems, setCartItems] = useState(0); // Cart items count
  const [isDropdownOpen, setDropdownOpen] = useState(false); // For profile dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Function to collapse navbar on scroll
    const handleScroll = () => {
      const navbarCollapse = document.getElementById('navbarCollapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show'); // Collapse the navbar
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header START */}
      <header className="navbar-light navbar-sticky header-static">
        {/* Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid px-3 px-xl-5">
            {/* Logo START */}
            <Link className="navbar-brand" to="/">
              <img className="light-mode-item logo navbar-brand-item" src="assets/images/logo1newbg.png" alt="logo" />
            </Link>
            {/* Logo END */}

            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Main navbar START */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Nav item 1 Home */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>

                {/* Nav item 2 Courses Dropdown */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/Course" id="courseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</Link>
                  <ul className="dropdown-menu" aria-labelledby="courseDropdown">
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/course">Networking</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/frontendcourse">Front-end</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/backendcourse">Back-end</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/digitalmarketing">Digital Marketing</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/graphicscourse">Graphics Designing</Link>
                    </li>
                  </ul>
                </li>

                {/* Nav item 3 Packages */}
                <li className="nav-item">
                  <Link className="nav-link" to="/coursecategory">Packages</Link>
                </li>
              </ul>

              {/* Search bar and sign in/signup links */}
              <div className="d-flex align-items-center">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>

                {/* Profile and Cart START */}
                <div className="d-flex align-items-center ms-3">
                  {/* Cart Icon with item count */}
                  <div className="position-relative">
                    <Link to="/addcart">
                      <IoMdCart size={28} />
                      <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center position-absolute" style={{ top: "-10px", right: "-10px" }}>
                        <span>{cartItems}</span>
                      </div>
                    </Link>
                  </div>

                 
                  
                </div>

                <div className="dropdown ms-3">
                    <button className="btn p-0" onClick={toggleDropdown}>
                      <FaCircleUser size={28} />
                    </button>
                    {isDropdownOpen && (
                      <ul className="dropdown-menu dropdown-menu-end show mt-3">
                        <li className="dropdown-item-text">
                          <strong>Khushi Diwan</strong>
                          <p className="small mb-0">khushi@example.com</p>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li><Link className="dropdown-item" to="/studenteditprofile">Edit Profile</Link></li>
                        <li><Link className="dropdown-item" to="/studentsetting">Account Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Help</Link></li>
                        <li><Link className="dropdown-item bg-danger-soft-hover" to="/signout">Sign Out</Link></li>
                      </ul>
                    )}
                  </div>
                {/* Profile and Cart END */}
              </div>
            </div>
            {/* Main navbar END */}
          </div>
        </nav>
        {/* Nav END */}
      </header>
      {/* Header END */}
    </div>
  );
};

export default Nav1;
