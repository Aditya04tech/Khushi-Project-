import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Modal, Button } from "react-bootstrap";

const CourseCategory1 = () => {
  // State variables
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isVideoBlurred, setIsVideoBlurred] = useState(true); // State to handle the blur effect
  const [showAddToCartButton, setShowAddToCartButton] = useState(false); // To toggle Add to Cart button

  const navigate = useNavigate();
  const handleCloseModal = () => setShowModal(false);
  const handleProceedToCart = () => {
    setShowModal(false);
    navigate("/cart"); // Navigate to the cart page
  };

  // Dummy course data
  const courses = [
    { id: 1, title: <Link to="/networkingvideo">SEO</Link>, imgSrc: "assets/images/videos/360p.mp4", type: "video" },
    { id: 2, title: "SMM", imgSrc: "assets/images/courses/4by3/SMM.png" },
    { id: 3, title: "Digital Marketing", imgSrc: "assets/images/courses/4by3/DM.png" },
  ];

  // Additional course info
  const courseInfo = {
    1: { duration: "10h 56m", lectures: "82 lectures", level: "Beginner" },
    2: { duration: "6h 20m", lectures: "60 lectures", level: "Intermediate" },
    3: { duration: "12h 15m", lectures: "100 lectures", level: "Advanced" },
  };

  // Modal handlers
  const handleShowModal = (courseId) => {
    setSelectedCourse(courseId);
    setShowModal(true);
  };

  const handlePurchase = () => {
    setPurchasedCourses([...purchasedCourses, selectedCourse]);
    setShowModal(false);
    navigate("/checkout");
  };

  // Cart handlers
  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setShowAddToCartButton(false); // Hide the button after adding
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCart([]);
    window.location.reload();
    navigate("/");
  };

  useEffect(() => {
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  return (
    <div>
      <Nav cartCount={cartCount} handleLogout={handleLogout} />

      <section className="bg-light position-relative mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 text-center">
              <img src="assets/images/element/cat1.png" alt="Category" />
            </div>
            <div className="col-md-6 text-center">
              <h1 className="mb-3">What do you want to learn?</h1>
              <p className="mb-3">Grow your skill with the most reliable online courses and certifications</p>
              <form className="bg-body rounded p-2">
                <input className="form-control border-0 me-1" type="search" placeholder="Search course" />
                <button type="button" className="btn btn-dark rounded">Search</button>
              </form>
            </div>
            <div className="col-6 col-md-3 text-center">
              <img src="assets/images/element/cat2.png" alt="Category" />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Course Listing */}
      <section>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="card rounded overflow-hidden shadow mb-4">
                <div className="card-body">
                  <h1>HTML</h1>
                  {/* Video 1 */}
                  <div className="row align-items-center mb-3">
                    <div className="col-md-6">
                      <video src="assets/videos/video1.mp4" controls width="100%" />
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Video 1 Title</h5>
                      <p className="mb-1">Duration: 10h 56m</p>
                      <p className="mb-1">Lectures: 82</p>
                      <p>Level: Beginner</p>
                    </div>
                  </div>
                  {/* Video 2 */}
                  <div className="row align-items-center mb-3">
                    <div className="col-md-6">
                      <video src="assets/videos/video2.mp4" controls width="100%" />
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Video 2 Title</h5>
                      <p className="mb-1">Duration: 6h 20m</p>
                      <p className="mb-1">Lectures: 60</p>
                      <p>Level: Intermediate</p>
                    </div>
                  </div>
                  {/* Video 3 (Blurred with Add to Cart Button) */}
                  <div
                    className="row align-items-center"
                    style={{
                      filter: isVideoBlurred ? "blur(8px)" : "none",
                      cursor: "pointer",
                      position: "relative"
                    }}
                    onClick={() => setShowAddToCartButton(true)} // On click, show the Add to Cart button
                  >
                    <div className="col-md-6">
                      <video src="assets/videos/video3.mp4" controls width="100%" />
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Video 3 Title</h5>
                      <p className="mb-1">Duration: 12h 15m</p>
                      <p className="mb-1">Lectures: 100</p>
                      <p>Level: Advanced</p>
                    </div>

                    {/* Add to Cart Button */}
                    {showAddToCartButton && (
                      <div
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{ zIndex: 10 }}
                      >
                        <Button variant="primary" onClick={() => handleAddToCart({ title: "Video 3 Title", id: 3 })}>
                          Add to Cart
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="card rounded overflow-hidden shadow mb-4">
                <div className="card-body">
                  <h1>NODE.JS</h1>
                  {/* Add videos here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseCategory1;
