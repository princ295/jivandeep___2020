import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button } from 'reactstrap';

//redux
import store from "../redux/store";
import { UploaderAction } from "./../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const SectionTwo = (props) => {


  const dispatch = useDispatch()
  const info = useSelector(res => res.Steperform)

  const { handleSubmit, pristine, previousPage, submitting } = props;
  const [visibal, setVisibal] = useState(true) 

  const onCheckStatus = (e) => {
    console.log(e.target.value);
    if(e.target.value == "yes"){
      setVisibal(false)
    }else{
      setVisibal(true)
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <br/><br/><br/>
       <section>
        <h4>Accept Policy</h4>
        <br />
        <hr />

         <div className="cart" style={{height: '300px',overflowY: 'scroll'}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita non ratione exercitationem at eligendi. Doloremque totam voluptatibus iste expedita hic nobis soluta labore velit, itaque facere porro? Quos, atque?</p>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dol<br/><br/><br/>or sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>

            <br/><br/><br/>
            <br/><br/><br/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!</p>
            <br/><br/><br/>
         </div>



        <div  onChange={onCheckStatus} style={{display:"flex", justifyContent: "center"}}>
          <h4 style={{flex: 'none'}}>Please Acepct this Policy press Yes</h4> &nbsp;&nbsp;
          <div style={{display: 'flex'}}>
            <input type="radio" name="status" value="yes" style={{width: '50px'}}/> YES &nbsp;
            <input type="radio" name="status" value="no" style={{width: '50px'}}/> NO
          </div>
        </div> 
        <br/><br/>
        
        {/* End new Remove and Add Input type*/}
      </section>
          
      <div style={{ paddingBottom: 30 }}>
        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
        </Button>
        <Button color="primary" className="btn-pill pull-right" disabled={visibal} type="submit" style={{marginRight: '20px'}}>
          Save &nbsp;
          <i className="fa fa-check" />
        </Button>
      </div>

      <br/><br/><br/>
    </form>
    </div>
  );
};

SectionTwo.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  
})(SectionTwo);
