import React from 'react';
import { NavLink } from 'react-router-dom';

import "./../style/Transplant.css";


const Transplant = (props) => {
  return (
    <div style={{overflowY: 'scroll'}}>
      <div className="main-content" id="panel">
        <div className="header bg-primary pb-4">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">kidney Transplant</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--6">
          <br/> <br/> <br/> <br/> <br/>
          <div className="row">
           <div className="col-xl-12">
            <div className="container" className="text-center">
                <div className="nav-wrapper">
                  <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                      <li className="nav-item">
                    <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i className="ni ni-cloud-upload-96 mr-2" />Family</a>
                    </li>
                      <li className="nav-item">
                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i className="ni ni-bell-55 mr-2" />Cadaver</a>
                    </li>
                      <li className="nav-item">
                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2" />Paired</a>
                    </li>
                  </ul>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                            <p className="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                            <p className="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                            {/* <button type="button" class="btn btn-secondary btn-lg btn-block">Processed</button> */}
                           <NavLink to="/dashboard/family"><button type="button" className=" btn btn-secondary btn-lg btn-block" data-toggle="modal" data-target=".bd-example-modal-xl">Processed</button></NavLink>
                           {/* <NavLink to="/family"> Click Me</NavLink> */}
                        </div>
                        <div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                            <p className="description">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            <NavLink to="/dashboard/cadover"><button type="button" className=" btn btn-secondary btn-lg btn-block" data-toggle="modal" data-target=".bd-example-modal-xl">Processed</button></NavLink>
                        </div>
                        <div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                            <p className="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                            <NavLink to="/dashboard/paired"><button type="button" className=" btn btn-secondary btn-lg btn-block" data-toggle="modal" data-target=".bd-example-modal-xl">Processed</button></NavLink>
                        </div>
                      </div>
                  </div>
                </div>
                <NavLink to="/dashboard"> <h4 className="center" style={{borderBottomStyle:"groove",width:"9%",justifyContent:"center",alignItems:"center", cursor: "pointer"}}>Back to Page</h4></NavLink>
                <br/><br/>  
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
  )
    
}

export default Transplant;
