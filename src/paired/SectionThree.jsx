import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button } from 'reactstrap';

//redux
import store from "../redux/store";
import { UploaderAction } from "./../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const SectionThree = (props) => {

  const dispatch = useDispatch()
  const info = useSelector(res => res.Steperform)

  const { handleSubmit, pristine, previousPage, submitting } = props;
  const [visibal, setVisibal] = useState(false) 


  const [fields, setFields] = useState([{ value: null }]);
  const [idImage, setIdImage] = useState({ idProofImage: null })
  const [idnumber, setIdNumber] = useState({
    idNumber:''
  })


  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    if(fields.length!=1){
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
      dispatch({
        type: "Medical_DOC_Remove_Doner",
        payload: i
      })
      console.log(fields)
    }
  }


  const onChangeEvent = (index,e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset','JivandeepImages')

      UploaderAction
        .UploadData(data)
          .then(res=>{
            console.log(res)
            //mapping url
            fields[index].value = res.data.secure_url
            let fileInfo = res.data.secure_url
            setFields(fields)
            dispatch({
              type: "Medical_DOC_Doner",
              payload: {
                fileInfo
              }
            })
            console.log(fields)
          }).catch(err=>console.log('somthing going to work.....'))
  }


  const onUploadIdentity = (e) => {
    
    const files = e.target.files
    const data = new FormData()

    data.append('file',files[0])
    data.append('upload_preset','JivandeepImages')
    UploaderAction
    .UploadData(data)
      .then(res=>{
        console.log(res)
     //mapping url
     idImage.idProofImage = res.data.secure_url
     dispatch({
       type: "ID_Proof_Doner",
       payload: res.data.secure_url
     })
     setIdImage(idImage)
     console.log(idImage)
      }).catch(err=>console.log('somthing going to work.....'))
  }


  const onChangeText = (e) => {
    setIdNumber({ ...idnumber, [e.target.name]: e.target.value });
    dispatch({
      type: "ID_Number_Doner",
      payload: e.target.value 
    })
    console.log(info)
    console.log(idnumber)
  }


  const onCheckStatus = (e) => {
    console.log(e.target.value);
    if(e.target.value == "yes"){
      setVisibal(true)
    }else{
      setVisibal(false)
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <br/><br/><br/>
       <section>
        <p>Identity Documents of Donor</p>
        <h6 className="heading-small text-muted mb-1 text-left">
          PAN Card / Aadhar Card / Voter Information / Driving
          Licence
        </h6>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Card Number"
              className="form-control shadow-none"
              onChange={onChangeText}
            />
          </div>
          <div className="col-md-2">
            <label style={{ paddingTop: 18 }}>and</label>
          </div>
          <div className="col-md-4">
            <input
              type="file"
              className="form-control shadow-none"
              onChange={e=>onUploadIdentity(e)}
            />
          </div>
          <div className="col-sm-1" style={{ paddingTop: 18 }}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>
          <div className="col-sm-1" style={{ paddingTop: 18 }}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        <br />
        <hr />

        <div  onChange={onCheckStatus} style={{display:"flex", justifyContent: "center"}}>
          <h4 style={{flex: 'none'}}>Do You Have Medical Report Document</h4> &nbsp;&nbsp;
          <div style={{display: 'flex'}}>
            <input type="radio" name="status" value="yes" style={{width: '50px'}}/> YES &nbsp;
            <input type="radio" name="status" value="no" style={{width: '50px'}}/> NO
          </div>
        </div> 
        <br/><br/>
        
        {
          visibal? (
            <div>
              <p>Medical Report</p>
              <div className="form-group">
          <h6 className="heading-small text-muted mb-1 text-left">
            Upload Medical Report
          </h6>
          <div className="col-md-12">
            <div className="dynamic-wrap">
              <div>
                <button
                  className="btn btn-success btn-sm btn-add"
                  type="button"
                  >
                  <span className="glyphicon glyphicon-plus" onClick={() => handleAdd()}>
                    Add +
                  </span>
                </button>
              </div>
              <form role="form" autoComplete="off">
              
                {fields.map((field, idx) => {
                  return (
                    <div key={`${field}-${idx}`}>
                        
                     <div className="entry input-group">

                      <input
                        className="form-control"
                        name="fields"
                        type="file"
                        placeholder="Type something"
                        data-index={idx}
                        onChange={e => onChangeEvent(idx,e)}
                      />
                      &nbsp;
                      <span
                        className="input-group-btn"
                        style={{ paddingTop: "6px" }}
                      >
                        <button
                          className="btn btn-danger btn-sm btn-add"
                          type="button"
                        >
                          <span className="glyphicon glyphicon-plus" onClick={() => handleRemove(idx)}>
                            Remove
                          </span>
                        </button>
                      </span>
                      </div>
                    </div>
                  );
                })}

              </form>
              <br />
              {/* <small>Press <span className="glyphicon glyphicon-plus gs" /> to add another form field :)</small> */}
              <small>
                Press <strong>"Add"</strong> button for create new
                field :)
              </small>
            </div>
          </div>
        </div>
            </div>
          ): (
            <div><h3>If you not have any Document then Select No</h3></div>
          )
        }
        {/* End new Remove and Add Input type*/}
      </section>
          
      <div style={{ paddingBottom: 30 }}>
        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
        </Button>
        <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
          Save &nbsp;
          <i className="fa fa-check" />
        </Button>
      </div>

      <br/><br/><br/>
    </form>
    </div>
  );
};

SectionThree.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  
})(SectionThree);