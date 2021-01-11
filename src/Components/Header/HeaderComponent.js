import React, { Component } from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import "./HeaderComponent.css";
import { NavLink } from "react-router-dom";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  // test = () => {
  //   console.log(this.props.profile.username);
  // };
  render() {
    return (
      <Navbar  expand="lg" sticky="top">
       {this.props.profile.isLoggedIn ?null:
        <Navbar.Brand href="/">
          <img
            src="assets/images/pms.png"
            width="70"
            height="35"
            className="d-inline-block align-top"
            alt="pms"
          />
        </Navbar.Brand>
       }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {this.props.profile.isLoggedIn ?<div className="mr-auto">
         
          PMS Dashboard
         
        </div>:
          <Nav className="mr-auto">
            <Nav.Link>Home{this.props.profile.isLoggedIn}</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        }
          <Form inline>
            {this.props.profile.isLoggedIn ? (
              
              <NavDropdown className="ml-auto btn btn-secondary" title={this.props.profile.username} id="collasible-nav-dropdown">
              {/* <NavLink to="/profile"> */}
               
                <NavDropdown.Item as={NavLink} to='/profile'> <span className="fa fa-user" > Profile</span></NavDropdown.Item>
                {/* </NavLink> */}
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item  onClick={this.props.logout}>
                <span className="fa fa-sign-out"> Logout</span>                
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="signupbtn">
                <NavLink to="/register">
                  <Button id="register" variant="outline-primary"><span className="fa fa-user-plus"> Register</span></Button>
                </NavLink>
                <NavLink to="/login">
                  <Button id="login" variant="outline-primary"><span className="fa fa-sign-in"> Login</span></Button>
                </NavLink>
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
