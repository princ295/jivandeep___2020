import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from "../component/index";

const Welcome = () => {
  return (
    <div className="bg-default">
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  {/* <h1 className="text-white">Welcome!</h1> */}
                  {/* <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                     <span className="btn-inner--icon"><img src="../assets/2678153.jpg" height="200px" width="200px"/></span>
                     <br/><br/>
                     <h1 className="text-blue">Welcome!</h1>
                     <h3 className="text-blue">Jivandeep Health Services</h3>
                    <small>Sign in with</small>
                    </div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/login.svg"/></span>
                      <Link className="btn-inner--text" to="/login">Sign in</Link>
                    </a>
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/register.svg" /></span>
                      <Link className="btn-inner--text" to="/signup">Sign up</Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-5" id="footer-main">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;