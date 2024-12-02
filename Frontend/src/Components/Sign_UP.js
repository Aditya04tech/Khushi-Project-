import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import axios from "../Components/Services/axiosInterceptor";

const Sign_UP = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/auth/users/register", input);
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };



  
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div className="p-3 p-lg-5">
                  <div className="text-center">
                    <h2 className="fw-bold">
                      Welcome to our largest community
                    </h2>
                    <p className="mb-0 h6 fw-light">
                      Let's learn something new today!
                    </p>
                  </div>
                  <img
                    src="assets/images/element/02.svg"
                    className="mt-5"
                    alt
                  />
                  <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                    <ul className="avatar-group mb-2 mb-sm-0">
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/02.jpg"
                          alt="avatar"
                        />
                      </li>
                    </ul>
                    <p className="mb-0 h6 fw-light ms-0 ms-sm-3">
                      4k+ Students joined us, now it's your turn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 m-auto">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto">
                    <img
                      src="assets/images/element/03.svg"
                      className="h-40px mb-2"
                      alt
                    />
                    <h2>Sign up for your account!</h2>
                    <p className="lead mb-4">
                      Nice to see you! Please Sign up with your account.
                    </p>
                    <form onSubmit={handleRegister}>
                      {/* Name */}
                    <div className="mb-4">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          className="form-control border-1 bg-light rounded-end ps-1"
                          // placeholder="Name"
                          id="exampleInputEmail1"
                          name="name"
                          value={input.name}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      {/* Email */}
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control border-1 bg-light rounded-end ps-1"
                          // placeholder="E-mail"
                          id="exampleInputEmail1"
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <label htmlFor="inputPassword5" className="form-label">
                          Password *
                        </label>
                        <input
                          type="password"
                          className="form-control border-1 bg-light rounded-end ps-1"
                          // placeholder="Password"
                          id="inputPassword5"
                          name="password"
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Confirm Password */}
                      {/* <div className="mb-4">
                        <label htmlFor="inputPassword6" className="form-label">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="Confirm Password"
                          id="inputPassword6"
                          name="confirmPassword"
                          onChange={onChange}
                        />
                      </div> */}

                      {/* Check box */}
                      {/* <div className="mb-4">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="checkbox-1" />
                          <label className="form-check-label" htmlFor="checkbox-1">
                            By signing up, you agree to the<a href="#"> terms of service</a>
                          </label>
                        </div>
                      </div> */}

                      {/* Submit Button */}
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary mb-0"
                            type="submit"
                            
                          >
                            Sign Up
                          </button>
                        </div>

                        {/* Add the login link here */}
                      </div>
                    </form>

                    {/* Social buttons */}
                    <div className="row">
                      <div className="position-relative my-4">
                        <hr />
                        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                          Or
                        </p>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                          <i className="fab fa-fw fa-google text-white me-2" />
                          Signup with Google
                        </a>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-facebook mb-0">
                          <i className="fab fa-fw fa-facebook-f me-2" />
                          Signup with Facebook
                        </a>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <p>
                        Already have an account?
                        <Link to="/signout"> Log In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sign_UP;