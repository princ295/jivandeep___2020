import React from 'react';

//router link for navigation
import { NavLink, Link } from 'react-router-dom';

const Header = ({match}) => {


  return (     
    <nav className="sidenav navbar navbar-vertical   fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div className="scrollbar-inner">
        {/* Brand */}
        <div className="sidenav-header  d-flex  align-items-center">
          <a className="navbar-brand" href="dashboard.html">
            <img src="../../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </a>
          <div className=" ml-auto ">
            {/* Sidenav toggler */}
            <div className="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
                <i className="sidenav-toggler-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-inner">
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* Nav items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/dashboard">
                <i className="ni ni-tv-2 text-primary" />
                <Link to={`${match}`}>
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/icons.html">
                <i className="ni ni-planet text-orange" />
                <span className="nav-link-text">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/map.html">
                <i className="ni ni-pin-3 text-primary" />
                <span className="nav-link-text">Google</span>
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to={`${match}/profile`}>
                <i className="ni ni-single-02 text-yellow" />
                <Link to={`${match}/profile`}>
                  <span className="nav-link-text">Profile</span>
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/tables.html">
                <i className="ni ni-bullet-list-67 text-default" />
                <span className="nav-link-text">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/login.html">
                <i className="ni ni-key-25 text-info" />
                <span className="nav-link-text">Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/register.html">
                <i className="ni ni-circle-08 text-pink" />
                <span className="nav-link-text">Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/upgrade.html">
                <i className="ni ni-send text-dark" />
                <span className="nav-link-text">Upgrade</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Header;