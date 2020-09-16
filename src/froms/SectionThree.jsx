import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button } from 'reactstrap';

const SectionThree = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  const onChangeEvent = () => {}
  return (
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
                        />
                      </div>
          <div className="col-md-2">
                        <label style={{ paddingTop: 18 }}>and</label>
                      </div>
          <div className="col-md-4">
            <input
              type="file"
                          className="form-control shadow-none"
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
                                name="fields"
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
        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
        <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}} disabled={pristine || submitting}>
               Save &nbsp;
              <i className="fa fa-check" />
            </Button>
      </div>

      <br/><br/><br/>
    </form>
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
