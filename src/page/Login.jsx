
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Forgotpwd } from "../component/index";


//redux
import store from '../redux/store';
import Actions from '../redux/actions/user';

const Login = (props) => {

  const initialState = useState({
    email: '',
    password: ''
  })
  const [user, setUser] = useState(initialState);

  const onChangehandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    console.log(user)
    store
    .dispatch(Actions.fetchUserLogin(user))
    .then(( {success} ) => {
      if (success) {
        props.history.push('/');
      }
      console.log(success)

    })
    .catch(() => {
      // setSubmitting(false);
      console.log('------------Somthing Going Worng there ----- ')
    });
  }

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
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
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
                  <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg" /></span>
                      <span className="btn-inner--text">Github</span>
                    </a>
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg" /></span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  {/* <form role="form"> */}
                    <div className="form-group mb-3">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83" /></span>
                        </div>
                        <input className="form-control" name="email" onChange={onChangehandler} placeholder="Email" type="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                        </div>
                        <input className="form-control" name="password" onChange={onChangehandler} placeholder="Password" type="password" />
                      </div>
                    </div>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                      <label className="custom-control-label" htmlFor=" customCheckLogin">
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4 button success" onClick={onSubmit}>Sign in</button>
                    </div>
                  {/* </form> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <a href="#" className="text-light" data-toggle="modal" data-target="#exampleModal" ><small>Forgot password?</small></a>
                      {/* Modal */}
                      {/*<Forgotpass />*/}
                </div>
                <div className="col-6 text-right">
                  <Link to="/signup" className="text-light"><small>Create new account</small></Link>
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

export default Login;