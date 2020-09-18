import React, { useState } from "react";


import { userApi } from "../utils/api/index";

import store from '../redux/store';
import Actions from '../redux/actions/user';

import { UploaderAction } from "./../redux/actions/";
import { useSelector, useDispatch } from 'react-redux';
import user from "../utils/api/user";

const EditProfile = ({loggedUserInfo, match}) => {

  let profile_image =''
  const [userInfo, SetUserInfo] = useState(loggedUserInfo)
  
  const onChangeEvent = (e) => {
    SetUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  } 

  const onSubmit = (e) => {
    e.preventDefault();
    store
    .dispatch(Actions.fetchUpdateData(userInfo))
    .then((status) => {
      store
        .dispatch(Actions.fetchUserData())
        console.log(status)
        alert('your profile update sucessfully..........')
    })
    .catch(() => {
      // setSubmitting(false);
      console.log('------------Somthing Going Worng there ----- ')
    });
  }


  const onUploadProfile = (e) => {
    
    let name= e.target.name
    
    console.log(e.target.name)
    const files = e.target.files
    const data = new FormData()

    data.append('file',files[0])
    console.log(userInfo)
    data.append('upload_preset','JivandeepImages')
    UploaderAction
    .UploadData(data)
      .then(res=>{
        profile_image = res.config.url
        console.log(userInfo)
        
        SetUserInfo({...userInfo, [name]: res.config.url})
      }).catch(err=>console.log('somthing going to work.....'))

      SetUserInfo({ ...userInfo, [name]: profile_image});
      console.log(userInfo)
  }


  return (
    <div className="w-100 mx-auto  p-10">  
      <form>
          {/* --------------1st row ------------ */}
          <h6 className="heading-small text-left mb-4">User information</h6>
          <div className="row">
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      value={userInfo.firstname}
                      onChange={e => onChangeEvent(e)}
                    />
                </div>
             </div>
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastname"
                    value={userInfo.lastname} 
                    onChange={e => onChangeEvent(e)}
                  />
              </div>
             </div>
             <div className="col-md-4">
                  <div className="form-group form-control-alternative">
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Gender" name="gender" value={gender}onChange={e => onChangeEvent(e)}/> */}
                        <select className="form-control" style={{"position":"relative","marginTop":"5px","height":"50px"}}
                         placeholder="Gender" id="gender" name="gender" value={userInfo.gender} onChange={e => onChangeEvent(e)}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Third gender">Third gender</option>
                        </select>
                  </div>       
             </div>
          </div>
          {/* --------------End 1 row ------------ */}

          {/* --------------2nd row ------------ */}
          <div className="row">
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                   <select class="form-control" style={{"position":"relative","marginTop":"5px","height":"50px"}} 
                   id="professionalStatus" name="professionalStatus" value={userInfo.professionalStatus} onChange={e => onChangeEvent(e)}>
                        <option value="Government Employee">Government Employee</option>
                        <option value="Private Employee">Private Employee</option>
                        <option value="Business">Business</option>
                   </select>
              </div>
             </div>
          </div>
          {/* --------------End 2nd row ------------ */}

          {/* --------------3rd row ------------ */}
          <h6 className="heading-small text-left mb-4">contact information</h6>
          <div className="row">
             <div className="col-md-6">
                <div className="form-group form-control-alternative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      value={userInfo.mobileNumber}
                      onChange={e => onChangeEvent(e)}
                    />
               </div>
             </div>
             <div className="col-md-6">
                    <div className="form-group form-control-alternative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Alternate Mobile Number"
                          name="alternateNumber"
                          value={userInfo.alternateNumber}
                          onChange={e => onChangeEvent(e)}
                        />
                   </div>
             </div>
          </div>
          {/* --------------End 3rd row ---------*/}
           
          {/* --------------4th row ---------*/}
          <h6 className="heading-small text-left mb-4">address information</h6>
          <div className="row">
                 <div className="col-md-12">
                      <div className="form-group form-control-alternative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          name="address"
                          value={userInfo.address}
                          onChange={e => onChangeEvent(e)}
                        />
                     </div>
                 </div>
              </div>
          {/* --------------End 4th row ---------*/}

          {/* -------------- 5th row ---------*/}
          <div className="row">
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                    <select class="form-control" style={{"position":"relative","marginTop":"5px","height":"50px"}} 
                      name="state" id="state" value={userInfo.state} onChange={e => onChangeEvent(e)}>
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
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pincode"
                    name="pincode"
                    value={userInfo.pincode}
                    onChange={e => onChangeEvent(e)}
                  />
                  </div>
             </div>
             <div className="col-md-4">
                <div className="form-group form-control-alternative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    value={userInfo.country}
                    onChange={e => onChangeEvent(e)}
                  />
                </div>
              </div>
            </div>
          {/* --------------End 5th row ---------*/}

          {/* --------------6th row ---------*/}
          <h6 className="heading-small text-left mb-4">User Profile Picture</h6>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group form-control-alternative">
                {/* <input
                  type="file"
                  className="form-control"
                  placeholder="Profile Picture"
                  name="profileImage"
                  value={userInfo.profileImage}
                  onChange={e => onChangeEvent(e)}
                /> */}

                <input
                  type="file"
                  className="form-control"
                  placeholder="Profile Picture"
                  name="profileImage"
                  onChange={e=>onUploadProfile(e)}
                />



              </div>
            </div>
          </div>
          {/* --------------End 6th row ---------*/}
          
          <button onClick={onSubmit} className="btn btn-primary btn-block">Update User</button>
        </form>
      </div>
  );
};

export default EditProfile;