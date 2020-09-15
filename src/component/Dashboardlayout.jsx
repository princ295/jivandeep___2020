import React from "react";

import { NavLink } from "react-router-dom";
const Dashboardlayout = () => {
  return(
    <div className="main-content" id="panel">
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Dashboard</h6>
              </div>
            </div>
            {/* Card stats */}
            
          </div>
        </div>
      </div>
    {/* Page content */}
    <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl-12">
          <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0 font-weight-bold h2">Organs</h5>
                        {/* <span className="h2 font-weight-bold mb-0">350,897</span> */}
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">

                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary  btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
                      See More
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      {/* Add .modal-dialog-centered to .modal-dialog to vertically center the modal */}
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Organs</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                                      {/*Accordion wrapper*/}
                            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                              {/* Accordion card */}
                              <div className="card">
                                {/* Card header */}
                                <div className="card-header" role="tab" id="headingOne1">
                                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    <h5 className="mb-0">
                                      Kidney <i className="fas fa-angle-down rotate-icon" />
                                    </h5>
                                  </a>
                                </div>
                                {/* Card body */}
                                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                  <div className="card-body">
                                  <NavLink to="/dashboard/transplant"> Kidney Transplant</NavLink><br/><br/>
                                    Post Transplant Case<br/><br/>
                                    Personalised Case
                                  </div>
                                </div>
                              </div>
                              {/* Accordion card */}
                              {/* Accordion card */}
                              <div className="card">
                                {/* Card header */}
                                <div className="card-header" role="tab" id="headingTwo2">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                    <h5 className="mb-0">
                                      Liver <i className="fas fa-angle-down rotate-icon" />
                                    </h5>
                                  </a>
                                </div>
                                {/* Card body */}
                                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                                  <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                  </div>
                                </div>
                              </div>
                              {/* Accordion card */}
                              {/* Accordion card */}
                              <div className="card">
                                {/* Card header */}
                                <div className="card-header" role="tab" id="headingThree3">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                    <h5 className="mb-0">
                                    Bone marrow <i className="fas fa-angle-down rotate-icon" />
                                    </h5>
                                  </a>
                                </div>
                                {/* Card body */}
                                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                                  <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                {/* Card header */}
                                <div className="card-header" role="tab" id="headingThree4">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                                    <h5 className="mb-0">
                                    Cornea <i className="fas fa-angle-down rotate-icon" />
                                    </h5>
                                  </a>
                                </div>
                                {/* Card body */}
                                <div id="collapseThree4" className="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordionEx">
                                  <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                  </div>
                                </div>
                              </div>
                              {/* Accordion card */}
                            </div>
                            {/* Accordion wrapper */}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                          <i className="ni ni-money-coins" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> 

            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Total traffic</h5>
                        <span className="h2 font-weight-bold mb-0">350,897</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="card card-stats">
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                          <i className="ni ni-money-coins" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
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
  )
}

export default Dashboardlayout;