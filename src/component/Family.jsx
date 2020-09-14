import React, { Component } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import "../style/Family.css";
import { Header, Home } from "../component/index";

class Family extends Component {
  //    Stepper form JS Code
  componentDidMount() {
    var i;
    var base_color = "white";
    var active_color = "rgb(237, 40, 70)";

    var child = 1;
    var length = $("section").length - 1;
    $("#prev").addClass("disabled");
    $("#submit").addClass("disabled");

    $("section").not("section:nth-of-type(1)").hide();
    $("section")
      .not("section:nth-of-type(1)")
      .css("transform", "translateX(100px)");

    var svgWidth = length * 200 + 24;
    $("#svg_wrap").html(
      '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
        svgWidth +
        ' 24" xml:space="preserve"></svg>'
    );

    function makeSVG(tag, attrs) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    }

    for (i = 0; i < length; i++) {
      var positionX = 12 + i * 200;
      var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
      document.getElementById("svg_form_time").appendChild(rect);
      // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
      var circle = makeSVG("circle", {
        cx: positionX,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6,
      });
      document.getElementById("svg_form_time").appendChild(circle);
    }

    var circle = makeSVG("circle", {
      cx: positionX + 200,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6,
    });
    document.getElementById("svg_form_time").appendChild(circle);

    $("circle:nth-of-type(1)").css("fill", active_color);

    $(".button").click(function () {
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      var id = $(this).attr("id");
      if (id == "next") {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $("#submit").removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      } else if (id == "prev") {
        $("#next").removeClass("disabled");
        $("#submit").addClass("disabled");
        if (child <= 2) {
          $(this).addClass("disabled");
        }
        if (child > 1) {
          child--;
        }
      }
      var circle_child = child + 1;
      $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
      );
      $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
      );
      var currentSection = $("section:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      currentSection.css("transform", "translateX(0)");
      currentSection.prevAll("section").css("transform", "translateX(-100px)");
      currentSection.nextAll("section").css("transform", "translateX(100px)");
      $("section").not(currentSection).hide();
    });

    // new Remove and Add Input type
    $(function () {
      $(document)
        .on("click", ".btn-add", function (e) {
          e.preventDefault();

          var dynaForm = $(".dynamic-wrap form:first"),
            currentEntry = $(this).parents(".entry:first"),
            newEntry = $(currentEntry.clone()).appendTo(dynaForm);

          newEntry.find("input").val("");
          dynaForm
            .find(".entry:not(:last) .btn-add")
            .removeClass("btn-add")
            .addClass("btn-remove")
            .removeClass("btn-success")
            .addClass("btn-danger")
            .html('<span class="glyphicon glyphicon-minus">Remove</span>');
        })
        .on("click", ".btn-remove", function (e) {
          $(this).parents(".entry:first").remove();

          e.preventDefault();
          return false;
        });
    });
  }

  render() {
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
                      Family Form
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page content */}
          <div
            className="container-fluid mt--6"
            style={{ backgroundColor: "#f8f9fe" }}
          >
            <br /> <br /> <br />
            <div className="row">
              <div className="col-xl-12">
                {/* Form start */}

                <div className="text-center">
                  <div id="svg_wrap" />
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
                                name="fields[]"
                                type="file"
                                placeholder="Type something"
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
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <h6 className="heading-small text-muted mb-1 text-left">
                            Gender
                          </h6>
                          <select className="form-control">
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
                          <select className="form-control">
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
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <h6 className="heading-small text-muted mb-1 text-left">
                            Professional Status
                          </h6>
                          <select className="form-control">
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
                          <select className="form-control">
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
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <h6 className="heading-small text-muted mb-1 text-left">
                            Country
                          </h6>
                          <select className="form-control">
                            <option>Select Country</option>
                            <option value="India">India</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>
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
                                name="fields[]"
                                type="file"
                                placeholder="Type something"
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
                  {/* <section>
            <p>Application</p>
            <input type="text" placeholder="Preferred entrance date" />
            <input type="text" placeholder="Number of people" />
          </section> */}
                  {/* <section>
            <p>General condtitions</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section> */}
                  <div className="button" id="prev">
                    ← Previous
                  </div>
                  <div className="button" id="next">
                    Next →
                  </div>
                  <div className="button" id="submit">
                    Agree and send application
                  </div>
                  <br />
                  <br />
                  {/* <NavLink to="/KidneyTransplat">
                    <button type="button" class="btn btn-secondary btn-lg">
                      Back to Page
                    </button>
                  </NavLink> */}
                  <br />
                  <br />
                </div>

                {/* End of form start */}
              </div>
            </div>
            {/* Footer */}
            <footer className="footer pt-0">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6">
                  <div className="copyright text-center  text-lg-left  text-muted">
                    © 2020{" "}
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
    );
  }
}

export default Family;
