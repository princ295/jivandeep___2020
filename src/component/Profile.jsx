import React, { useState} from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";


const Profile = () => {

  const initialState = {
    user: '', image: '', firstname: '', lastname: '', bloodGroup: '', gender: '', dateOfBirth: '', mobileNumber: '', alternateMobileNumber: '',
    address: '', state: '', pincode: '', country: '', professionalStatus: ''
  }

  const [info, setInfo] = useState(initialState)
  const { user } = useSelector((user)=>user)

  useEffect(()=>{
    loadUserinfo()
  },[])

  function loadUserinfo(){
    const { data } = user.data
  }
  //Submit buttom
  const onSubmit = () => {}

  return (
  <div>
    {/* <Header/> */}
    <div className="main-content" id="panel">
    {/* Topnav */}
    <div className="header pb-6 d-flex align-items-center" style={{minHeight: '500px', backgroundImage: 'url(../assets/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
              {/* <h1 className="display-2 text-white">Create Profile page</h1> */}
                <h1 className="display-2 text-white">👋 Prince Dewangan</h1>
                <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                {/* <a href="#!" className="btn btn-neutral">Edit profile</a> */}
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
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col">
                      <br/><br/><br/><br/><br/><br/>
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
                      <h3 className="mb-0">Profile Details </h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={e => onSubmit(e)}>
                    <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-username">First name</label>
                            <input type="text" id="firstname"  className="form-control" placeholder="Username" defaultValue="lucky.jesse" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Last name</label>
                            <input type="text" id="lastname" name="lastname" className="form-control" placeholder="jesse@example.com" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-first-name">Gender</label>
                              <select className="form-control" id="gender" name="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Third gender">Third gender</option>
                              </select>
                          </div>
                        </div>
                      </div>


                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-last-name">Blood Group</label>
                                <select className="form-control" id="bloodGroup" name="bloodGroup" >
                                  <option value="A+">A +ve</option>
                                  <option value="A-">A -ve</option>
                                  <option value="B+">B +ve</option>
                                  <option value="B-">B -ve</option>
                                  <option value="O+">O +ve</option>
                                  <option value="O-">O -ve</option>
                                  <option value="AB+">AB +ve</option>
                                  <option value="AB-">AB -ve</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-last-name">Date Of Birth</label>
                                <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control" placeholder="Last name" defaultValue="Jesse"/>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-last-name">Professional Status</label>
                                  <select class="form-control" id="professionalStatus" name="professionalStatus">
                                    <option value="Government Employee">Government Employee</option>
                                    <option value="Private Employee">Private Employee</option>
                                    <option value="Business">Business</option>
                                  </select>
                              </div>
                            </div>
                          </div>
                    </div>
                    

                    <h6 className="heading-small text-muted mb-4">Contact information</h6>

                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Mobile Number</label>
                            <input type="number" id="mobileNumber" name="mobileNumber" className="form-control" placeholder="Postal code"/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Alternate Number</label>
                            <input type="number" id="alternateNumber" name="alternateNumber" className="form-control" placeholder="Postal code"/>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">Address information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-address">Address</label>
                            <input id="address" name="address" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-city">State</label>
                            <select class="form-control form-control-alternative" name="state" id="state" >
                                <option class="form-control form-control-alternative" >Select State</option>
                                <option class="form-control form-control-alternative" value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option class="form-control form-control-alternative" value="Andhra Pradesh">Andhra Pradesh</option>
                                <option class="form-control form-control-alternative" value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option class="form-control form-control-alternative" value="Assam">Assam</option>
                                <option class="form-control form-control-alternative" value="Bihar">Bihar</option>
                                <option class="form-control form-control-alternative" value="Chandigarh">Chandigarh</option>
                                <option class="form-control form-control-alternative" value="Chhattisgarh">Chhattisgarh</option>
                                <option class="form-control form-control-alternative" value="Dadra and Nagar Haveli and Daman and Diu ">Dadra and Nagar Haveli and Daman and Diu </option>
                                <option class="form-control form-control-alternative" value="Delhi">Delhi</option>
                                <option class="form-control form-control-alternative" value="Goa">Goa</option>
                                <option class="form-control form-control-alternative" value="Gujarat">Gandhinagar</option>
                                <option class="form-control form-control-alternative" value="Haryana">Haryana</option>
                                <option class="form-control form-control-alternative" value="Himachal Pradesh">Himachal Pradesh</option>
                                <option class="form-control form-control-alternative" value="Jammu And Kashmir">Jammu And Kashmir</option>
                                <option class="form-control form-control-alternative" value="Jahrkhand">Jharkhand</option>
                                <option class="form-control form-control-alternative" value="Kerala">Kerala</option>
                                <option class="form-control form-control-alternative" value="Ladakh">Ladakh</option>
                                <option class="form-control form-control-alternative" value="Lakshadweep">Lakshadweep</option>
                                <option class="form-control form-control-alternative" value="Madhya Pradesh">Madhya Pradesh</option>
                                <option class="form-control form-control-alternative" value="Maharashtra">Maharashtra</option>
                                <option class="form-control form-control-alternative" value="Manipur">Manipur</option>
                                <option class="form-control form-control-alternative" value="Meghalaya">Meghalaya</option>
                                <option class="form-control form-control-alternative" value="Mizoram">Mizoram</option>
                                <option class="form-control form-control-alternative" value="Nagaland">Nagaland</option>
                                <option class="form-control form-control-alternative" value="Odisha">Odisha</option>
                                <option class="form-control form-control-alternative" value="Puducherry">Puducherry</option>
                                <option class="form-control form-control-alternative" value="Punjab">Punjab</option>
                                <option class="form-control form-control-alternative" value="Rajasthan">Rajasthan</option>
                                <option class="form-control form-control-alternative" value="Sikkim">Sikkim</option>
                                <option class="form-control form-control-alternative" value="Tamil Nadu">Tamil Nadu</option>
                                <option class="form-control form-control-alternative" value="Telangana">Telangana</option>
                                <option class="form-control form-control-alternative" value="Tripura">Tripura</option>
                                <option class="form-control form-control-alternative" value="Uttar Pradesh">Uttar Pradesh</option>
                                <option class="form-control form-control-alternative" value="Uttarakhand">Uttarakhand</option>
                                <option class="form-control form-control-alternative" value="West Bengal">West Bengal</option>
                         </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Pincode</label>
                            <input type="number" id="pincode" name="pincode" className="form-control" placeholder="Country" defaultValue="United States" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Country</label>
                            <select class="form-control form-control-alternative" id="country" name="country">
                                <option class="form-control form-control-alternative" >Select Country</option>
                                <option class="form-control form-control-alternative" value="India" >India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-lg-4">
                      <div className="form-group">
                        <label className="form-control-label">Profile picture</label>
                        <input type="file" class="form-control-file" name="file" id="profileImage" name="profileImage" accept="image/x-png,image/gif,image/jpeg" />
                        {/* <textarea rows={4} className="form-control" placeholder="A few words about you ..." defaultValue={"A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."} /> */}
                      </div>
                    </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
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

export default Profile;