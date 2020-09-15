import React, { useState, useEffect } from 'react';
import { EditProfile } from "./index";
import { useSelector } from 'react-redux';
import { userApi } from '../utils/api';

const ProfileInfo = () => {

  const { user } = useSelector((user) => user)
  let { data } = user

  data = data ? data :JSON.parse(unescape(atob((localStorage.getItem('logged_')))) )

  console.log(data)

  const { firstname, lastname, bloodGroup, gender, dateOfBirth, mobileNumber, alternateNumber, address, state, pincode, country, professionalStatus, profileImage } = data;

  useEffect(() => {
    if(!data){
      data = unescape(atob((localStorage.getItem('logged_'))))
    }
  }, [])

  function loadUser() {

  }

  return (
    <div style={{height: '100vh', overflow: 'overlay'}}>
      <div className="main-content" id="panel">

        <div className="header pb-6 d-flex align-items-center" style={{ minHeight: '500px', backgroundImage: 'url(../assets/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello Jesse</h1>
                <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                {/* <Link to="#" className="btn btn-neutral">Edit profile</Link> */}
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col-xl-4 order-xl-2">
              <div className="card card-profile">
                <img src="../assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" className="card-img-top" />
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img src="../assets/img/theme/team-4.jpg" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center"><br /><br /><br /><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 order-xl-1">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">View profile </h3>
                    </div>
                    <div className="col-4 text-right">
                      {/* <Link to="/edituser" className="btn btn-sm btn-primary">Update Profile</Link> */}
                      <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Update Profile</button>

                      {/* ----------Modal---------------*/}
                      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongTitle">Edit Userprofile</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <EditProfile loggedUserInfo={data} />
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ------------------------ */}

                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-username">First Name</label>
                            <p><b>{firstname}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Last Name</label>
                            <p><b>{lastname}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-first-name">Gender</label>
                            <p><b>{gender}</b></p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-first-name">Blood Group</label>
                            <p><b>{bloodGroup}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-last-name">Date of Birth</label>
                            <p><b>{dateOfBirth}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-last-name">Professional Status</label>
                            <p><b>{professionalStatus}</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="heading-small text-muted mb-4">contact information</h6>
                    {/* <hr className="my-4" /> */}
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-city">Mobile Number</label>
                            <p><b>{mobileNumber}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Alternate Number</label>
                            <p><b>{alternateNumber}</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="heading-small text-muted mb-4">address information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-address">Address</label>
                            <p><b>{address}</b></p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-city">State</label>
                            <p><b>{state}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Pincode</label>
                            <p><b>{pincode}</b></p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Country</label>
                            <p><b>{country}</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="footer pt-0">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="copyright text-center  text-lg-left  text-muted">
                  © 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;