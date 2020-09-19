import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

const SectionTwo = (props) => {
  const { handleSubmit, previousPage } = props;

  const steperform = useSelector(info => info.Steperform)
  const dispatch = useDispatch()

  console.log(steperform)
  console.log('--------------')

  const [donerprofile, setDonerprofile] = useState({
    firstname: '',lastname: '',bloodGroup: '',gender: '',dateOfBirth: '',mobileNumber: '',
    alternateNumber: '',address: '',state: '',pincode: '',country: '',professionalStatus: '',profileImage: ''
  })

  const onChangeEvent = (e) => {
    setDonerprofile({...donerprofile, [e.target.name]: e.target.value})
    dispatch({
        type: "Update_Donerprofile",
        payload: donerprofile
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <br /><br/><br/>
      <section>
        <p>Donor Profile</p>
        {/* row 1st */}
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                First name
              </h6>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="firstname"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Last name
              </h6>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                name="lastname"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Gender
              </h6>
              <select className="form-control"
                name="gender"
                onChange={e=>onChangeEvent(e)}
              >
                <option>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Third gender">Third gender</option>
              </select>
            </div>
          </div>
        </div>
        {/* row 2nd */}
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Blood Group
              </h6>
              <select className="form-control"
                name="bloodGroup"
                onChange={e=>onChangeEvent(e)}
              >
                <option>Select blood group</option>
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
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Date of Birth
              </h6>
              <input
                type="date"
                placeholder="Date of Birth"
                className="form-control"
                name="dateOfBirth"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Professional Status
              </h6>
              <select className="form-control"
                name="professionalStatus"
                onChange={e=>onChangeEvent(e)}
              >
                <option>Select professional status</option>
                <option value="Government Employee">
                  Government Employee
                </option>
                <option value="Private Employee">
                  Private Employee
                </option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
        </div>
        {/* row 3rd */}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Mobile Number
              </h6>
              <input
                type="text"
                placeholder="Mobile Number"
                className="form-control"
                name="mobileNumber"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Alternete Number
              </h6>
              <input
                type="text"
                placeholder="Alternate Mobile Number"
                className="form-control"
                name="alternateNumber"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
        </div>
        {/* row 4th */}
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Address
              </h6>
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
        </div>
        {/* row 5th */}
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                State
              </h6>
              <select className="form-control"
                 name="state"
                 onChange={e=>onChangeEvent(e)}
              >
                <option>Select State</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu ">
                              Dadra and Nagar Haveli and Daman and Diu{" "}
                            </option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gandhinagar</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                <option value="Jammu And Kashmir">
                              Jammu And Kashmir
                            </option>
                <option value="Jahrkhand">Jharkhand</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Zip
              </h6>
              <input
                type="text"
                placeholder="Zip"
                className="form-control"
                pattern="[0-9]*"
                maxlength="6"
                inputmode="numeric"
                name="pincode"
                onChange={e=>onChangeEvent(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h6 className="heading-small text-muted mb-1 text-left">
                Country
              </h6>
              <select className="form-control"
                name="country"
                onChange={e=>onChangeEvent(e)}
              >
                <option>Select Country</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: 30 }}>
        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
          <i className="fa fa-chevron-left" />
            &nbsp; Previous
        </Button>
        <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
           Next &nbsp;
          <i className="fa fa-chevron-right" />
        </Button>
      </div>
    <br/><br/><br/>
    </form>
  );
};

SectionTwo.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  
})(SectionTwo);
