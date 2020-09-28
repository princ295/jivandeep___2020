import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';


import { Button } from 'reactstrap';
import store from './../redux/store';
import { UploaderAction } from "./../redux/actions/";
import { useSelector, useDispatch } from 'react-redux';

const SectionOne  = (props) => {

  const info = useSelector(res => res.Steperform)
  const dispatch = useDispatch()
  
  const { handleSubmit } = props;

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
        type: "Cadover_Medical_DOC_Remove",
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
              type: "Cadover_Medical_DOC",
              payload: {
                fileInfo
              }
            })
            console.log(fields)
          }).catch(err=>console.log('somthing going to work.....'))
  }


  return (
    <form onSubmit={handleSubmit}>
      <br/><br/><br/>
      <section>
        <br />
        <p>Medical Report</p>
        <hr />
        {/* new Remove and Add Input type*/}
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
        {/* End new Remove and Add Input type*/}
      </section>

      <div style={{ paddingBottom: 30 }}>
        <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
           Next &nbsp;
          <i className="fa fa-chevron-right" />
        </Button>
      </div>
      <br/><br/><br/>
    </form>
  );
};

SectionOne.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  
})(SectionOne);
