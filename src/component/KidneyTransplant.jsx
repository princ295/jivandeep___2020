import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Home} from "../component/index";

const KidneyTransplant = () => {
  return (
    <div>
      {/* Sidenav */}
                    <Header />
      {/* Main content */}
      <div className="main-content" id="panel">
        {/* Topnav */}
                        <Home />
        {/* Header */}
        <div className="header bg-primary pb-4">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">
                    kidney Transplant
                  </h6>
                  {/* <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                      <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                        <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                      </ol>
                    </nav> */}
                </div>
                {/* <div className="col-lg-6 col-5 text-right">
                    <a href="#" className="btn btn-sm btn-neutral">New</a>
                    <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                  </div> */}
              </div>
              {/* Card stats */}
              {/* <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                    
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
                  <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                     
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
                  <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                     
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
                  <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                 
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Performance</h5>
                            <span className="h2 font-weight-bold mb-0">49,65%</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                              <i className="ni ni-chart-bar-32" />
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
                </div> */}
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--6">
          <br /> <br /> <br /> <br /> <br />
          {/* <div className="row">
              <div className="col-xl-8">
                <div className="card bg-default">
                  <div className="card-header bg-transparent">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                        <h5 className="h3 text-white mb-0">Sales value</h5>
                      </div>
                      <div className="col">
                        <ul className="nav nav-pills justify-content-end">
                          <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}" data-prefix="$" data-suffix="k">
                            <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                              <span className="d-none d-md-block">Month</span>
                              <span className="d-md-none">M</span>
                            </a>
                          </li>
                          <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}" data-prefix="$" data-suffix="k">
                            <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                              <span className="d-none d-md-block">Week</span>
                              <span className="d-md-none">W</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                   
                    <div className="chart">
                    
                      <canvas id="chart-sales-dark" className="chart-canvas" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                        <h5 className="h3 mb-0">Total orders</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                 
                    <div className="chart">
                      <canvas id="chart-bars" className="chart-canvas" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          <div className="row">
            <div className="col-xl-12">
              <div className="container" className="text-center">
                <div className="nav-wrapper">
                  <ul
                    className="nav nav-pills nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link mb-sm-3 mb-md-0 active"
                        id="tabs-icons-text-1-tab"
                        data-toggle="tab"
                        href="#tabs-icons-text-1"
                        role="tab"
                        aria-controls="tabs-icons-text-1"
                        aria-selected="true"
                      >
                        <i className="ni ni-cloud-upload-96 mr-2" />
                        Family
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-sm-3 mb-md-0"
                        id="tabs-icons-text-2-tab"
                        data-toggle="tab"
                        href="#tabs-icons-text-2"
                        role="tab"
                        aria-controls="tabs-icons-text-2"
                        aria-selected="false"
                      >
                        <i className="ni ni-bell-55 mr-2" />
                        Cadaver
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-sm-3 mb-md-0"
                        id="tabs-icons-text-3-tab"
                        data-toggle="tab"
                        href="#tabs-icons-text-3"
                        role="tab"
                        aria-controls="tabs-icons-text-3"
                        aria-selected="false"
                      >
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        Paired
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tabs-icons-text-1"
                        role="tabpanel"
                        aria-labelledby="tabs-icons-text-1-tab"
                      >
                        <p className="description">
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                        <p className="description">
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse.
                        </p>
                        {/* <button type="button" class="btn btn-secondary btn-lg btn-block">Processed</button> */}
                        <NavLink to="/family">
                          <button
                            type="button"
                            className=" btn btn-secondary btn-lg btn-block"
                            data-toggle="modal"
                            data-target=".bd-example-modal-xl"
                          >
                            Processed
                          </button>
                        </NavLink>
                        {/* <NavLink to="/family"> Click Me</NavLink> */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tabs-icons-text-2"
                        role="tabpanel"
                        aria-labelledby="tabs-icons-text-2-tab"
                      >
                        <p className="description">
                          Cosby sweater eu banh mi, qui irure terry richardson
                          ex squid. Aliquip placeat salvia cillum iphone. Seitan
                          aliquip quis cardigan american apparel, butcher
                          voluptate nisi qui.
                        </p>
                        <button
                          type="button"
                          class="btn btn-secondary btn-lg btn-block"
                        >
                          Processed
                        </button>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tabs-icons-text-3"
                        role="tabpanel"
                        aria-labelledby="tabs-icons-text-3-tab"
                      >
                        <p className="description">
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                        <button
                          type="button"
                          class="btn btn-secondary btn-lg btn-block"
                        >
                          Processed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <NavLink to="/dashboard">
                  {' '}
                  <h4
                    className="center"
                    style={{
                      borderBottomStyle: 'groove',
                      width: '9%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    Back to Page
                  </h4>
                </NavLink> */}
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="footer pt-0">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="copyright text-center  text-lg-left  text-muted">
                  © 2020{' '}
                  <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold ml-1"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com"
                      className="nav-link"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="nav-link"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://blog.creative-tim.com"
                      className="nav-link"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                      className="nav-link"
                      target="_blank"
                    >
                      MIT License
                    </a>
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

export default KidneyTransplant
