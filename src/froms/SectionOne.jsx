import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';


import { Button } from 'reactstrap';


const SectionOne  = (props) => {
  const { handleSubmit } = props;


  const [inputList, setInputList] = useState([{file: ''}]);


  
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    
    if(index!= inputList.length-1){
      
      let du_array= [...inputList]
      console.log(du_array)
       console.log( du_array.splice(index, 1))
      
       console.log(du_array.length)
       console.log(inputList)
       setInputList(du_array)
       console.log(inputList)
       console.log('done..........')
    }
    else{
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
      console.log('else block ............')
    }
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {file:''}]);
  };
 


  const onChangeEvent = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <br/><br/><br/>
      <section>
        <p>Identity Documents of User</p>
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
            />
          </div>
          <div className="col-md-2">
            <label style={{ paddingTop: 18 }}>and</label>
          </div>
          <div className="col-md-4">
            <input
              type="file"
              className="form-control shadow-none"
              onChange={e => onChangeEvent(e)}
            />
          </div>



          {inputList.map((x, i) => {
      return (
        <div className="box">
          <input
            name="firstName"
 placeholder="Enter First Name"
            value={x.firstName}
            onChange={e => handleInputChange(e, i)}
          />
          <input
            className="ml10"
            name="lastName"
 placeholder="Enter Last Name"
            value={x.lastName}
            onChange={e => handleInputChange(e, i)}
          />

          <div className="btn-box">
            {inputList.length !== 1 && <button
              className="mr10"
              onClick={() => handleRemoveClick(i)}>Remove</button>}
            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
          </div>
        </div>
      );
    })}






          <div className="col-sm-1" style={{ paddingTop: 18 }}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>
          <div className="col-sm-1" style={{ paddingTop: 18 }}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        <br />
        <hr />
        <p>Medical Report</p>
        {/* new Remove and Add Input type*/}
        <div className="form-group">
          <h6 className="heading-small text-muted mb-1 text-left">
            Upload Medical Report
          </h6>
          <div className="col-md-12">
            <div className="dynamic-wrap">
              <form role="form" autoComplete="off">
                            <div className="entry input-group">
                              <input
                                className="form-control"
                                name="fields[]"
                                type="file"
                                placeholder="Type something"
                                onChange={e => onChangeEvent(e)}
                              />
                              &nbsp;
                              <span
                                className="input-group-btn"
                                style={{ paddingTop: "6px" }}
                              >
                                <button
                                  className="btn btn-success btn-sm btn-add"
                                  type="button"
                                >
                                  <span className="glyphicon glyphicon-plus">
                                    Add
                                  </span>
                                </button>
                              </span>
                            </div>
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
