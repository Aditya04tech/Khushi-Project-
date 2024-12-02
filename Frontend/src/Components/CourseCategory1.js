import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead
import Nav from './Nav'
import Footer from './Footer';

const CourseCategory1 = ({ onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      localStorage.removeItem("cart");
    }
  }, []); 

  useEffect(() => {
    // Update cart count whenever the cart state changes
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existsInCart = cart.find((item) => item.id === product.id);
    if (existsInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleAdd = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (product, isDelete = false) => {
    if (isDelete) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setCart([]);
    window.location.reload();
    navigate("/");
  };
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Simulate fetching product (course) data
    setProducts([
      { id: 1, name: "Computer Hardware", price: 500, image: "assets/images/courses/4by3/HW.png" },
      { id: 2, name: "Computer Networking", price: 800, image: "assets/images/courses/4by3/NW.png" },
      { id: 3, name: "AWS Cloud Computing", price: 1200, image: "assets/images/courses/4by3/AWS.png" },
      { id: 4, name: "Linux", price: 1500, image: "assets/images/courses/4by3/Linux.png" },
      { id: 5, name: "CCNA", price: 1500, image: "assets/images/courses/4by3/CCNA.png" },
      { id: 6, name: "MCITP", price: 1500, image: "assets/images/courses/4by3/MCT.png" },
      { id: 7, name: "MCSE", price: 1500, image: "assets/images/courses/4by3/Linux.png" }
    ]);
  }, []);



  const handleNavigateToCourseList = () => {
    navigate('/courselist'); // Navigate to course list using navigate
  };

  return (
    <div>
      <Nav cartCount={cartCount} handleLogout={handleLogout} />
      <br /><br /><br />
      <section className="bg-light position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-6 col-md-3 text-center order-1">
                  <img src="assets/images/element/cat1.png" alt="Category" />
                </div>
                <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
                  <h1 className="mb-3">What do you want to learn?</h1>
                  <p className="mb-3">Grow your skill with the most reliable online courses and certifications</p>
                  <form className="bg-body rounded p-2">
                    <input className="form-control border-0 me-1" type="search" placeholder="Search course " />
                    <button type="button" className="btn btn-dark rounded">Search</button>
                  </form>
                </div>
                <div className="col-6 col-md-3 text-center order-3">
                  <img src="assets/images/element/cat2.png" alt="Cat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Course Listing */}
      <section>
        <div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4 col-xl-3">
                <div className="card card-body text-center position-relative btn-transition p-4">
                  <div className="col-md-12">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="img-border" 
                      style={{ cursor: 'pointer' }} // Set cursor to pointer for image
                      onClick={handleNavigateToCourseList} // Redirect on image click
                    />
                  </div>
                  <h5 
                    className="mb-2 mt-3" 
                    style={{ cursor: 'pointer' }} // Set cursor to pointer for heading
                    onClick={handleNavigateToCourseList} // Redirect on heading click
                  >
                    {product.name}
                  </h5>
                  <h6 className="mb-0">Price: ₹{product.price}</h6>
                  <button 
                    className="btn btn-primary mt-3" 
                    onClick={() => handleAddToCart(product)}
                    style={{ cursor: 'pointer' }} // Set cursor to pointer for button
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CourseCategory1;