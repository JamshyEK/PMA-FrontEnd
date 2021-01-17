import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import "./sidebarComponent.css";

const Side = (props) => {
  return (
    <>
     

      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
            
              <Navbar.Brand href="/">
                <img
                  src="assets/images/pms.png"
                  width="55"
                  height="3o"
                  className="d-inline-block align-top"
                  alt="pms"
                />
              </Navbar.Brand>
            
              {/* <li className="sidebar-item pt-2">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="dashboard.html"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li> */}
              {props.profile.role === "user" ? (
                <div>
                  <NavLink to="/new_request">
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <span className="hide-menu">New Request</span>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/all_request">
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        <span className="hide-menu">All Requests</span>
                      </a>
                    </li>
                  </NavLink>
                </div>
              ) :(props.profile.role === "admin")?(
                <div>
                  <NavLink to="/all_request_admin">
                    <li className="sidebar-item">
                      <a
                        className="sidebaall_request_adminr-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        <span className="hide-menu">Requests</span>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/signup_kudumbashree">
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <span className="hide-menu">Sign up Kudumbshree</span>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/create_posts">
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <span className="hide-menu">Create Posts</span>
                      </a>
                    </li>
                  </NavLink>
                  </div>
              ): (          <div>
                  <NavLink to="/all_request_Kudumbashree">
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link waves-effect waves-dark sidebar-link"
                        aria-expanded="false"
                      >
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        <span className="hide-menu">Requests</span>
                      </a>
                    </li>
                  </NavLink>
                  </div>)}
              {/* <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="fontawesome.html"
                                aria-expanded="false">
                                <i className="fa fa-font" aria-hidden="true"></i>
                                <span className="hide-menu">Icon</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="map-google.html"
                                aria-expanded="false">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <span className="hide-menu">Google Map</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="blank.html"
                                aria-expanded="false">
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span className="hide-menu">Blank Page</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="404.html"
                                aria-expanded="false">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span className="hide-menu">Error 404</span>
                            </a>
                        </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
