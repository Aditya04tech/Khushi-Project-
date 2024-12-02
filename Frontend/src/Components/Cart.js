import React, { useState, useEffect } from "react";
import axios from "../Components/Services/axiosInterceptor";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import cartstxt from "../Components/Css/cartstxt.css";
import PropTypes from 'prop-types';

const Cart = ({ handleLogout }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Update cart quantity
  const handleAdd = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };

  const handleRemove = (item, isDelete = false) => {
    let updatedCart;
    if (isDelete) {
      updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    } else {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };

  // Calculate total price whenever the cart changes
  useEffect(() => {
    setTotalPrice(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0)); // Update cart count
  }, [cart]);

  const handleBuy = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Save cart before login
      alert('Please log in or sign up to complete your purchase.');
      navigate('/signUp');
    } else {
      const purchasedVideos = JSON.parse(localStorage.getItem('purchasedVideos')) || [];
      const newPurchasedVideos = [...purchasedVideos, ...cart];
      localStorage.setItem('purchasedVideos', JSON.stringify(newPurchasedVideos));

      alert('Purchase successful!');
      setCart([]); // Clear the cart after purchase
      localStorage.removeItem('cart');
      localStorage.setItem('dashboardEnabled', 'true');
      navigate('/studentdashboard');
    }
  };

  return (
    <div>
      <Nav cartCount={cartCount} handleLogout={handleLogout} />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3">
                <h1 className="m-0">My Cart</h1>
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/courses">Courses</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={cartstxt.cart_container}>
        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/main')} className={cartstxt.green_btn}>
              Add More Products
            </button>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className={cartstxt.cart_item}>
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <video
                  src={item.videoUrl}
                  className={cartstxt.cart_video}
                  controls
                  width="250"
                />
                <div className={cartstxt.button_group}>
                  <button onClick={() => handleAdd(item)} className={cartstxt.quantity_btn}>+</button>
                  <button onClick={() => handleRemove(item)} className={cartstxt.quantity_btn}>-</button>
                  <button onClick={() => handleRemove(item, true)} className={cartstxt.delete_btn}>Delete</button>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice}</h3>
            <button onClick={handleBuy} className={cartstxt.green_btn}>
              Buy Now
            </button>
            <button onClick={() => navigate('/courselist')} className={cartstxt.green_btn}>
              Add More Products
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Props validation
Cart.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Cart;
