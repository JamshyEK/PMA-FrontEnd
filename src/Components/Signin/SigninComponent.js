import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Signup/SignupComponent.css";
import { Control, Form, Errors, actions } from "react-redux-form";
import { Button } from "react-bootstrap";
import ErrorCom from '../ErrorsCom/ErrorComponent'


const required = (val) => val && val.length;
export default class SigninComponent extends Component {
  constructor(props) {
    super(props);
  }

  // test=()=>{
  //  const value=new Object({
  //     name:"jamshy",
  //     id:2121,
  //     role:"fsdf",

  //   })
  //   this.props.postLogin(value);
  // }
  handleSubmit = (values) => {
     //ar test= 
     this.props.postLogin(values);
     this.props.resetLogin();
     //console.log("data:",test)
     
     //alert(JSON.stringify(values));
  };
  render() {
    return (
      <div>
      
        <section className="signup">
          <div className="container">
         
            <div className="signin-content">
           
              <div className="signin-image">
              {/* <Button onClick={this.test}>test</Button> */}
                <figure>
                  <img src="/assets/images/pmsimg.png" alt="login image" />
                </figure>
                <NavLink to="/register">
                  <a href="#" className="signup-image-link">
                    Create an account
                  </a>
                </NavLink>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <ErrorCom profile={this.props.profile}/>
                <Form
                  model="login"
                  className="register-form"
                  id="login-form"
                  onSubmit={(values) => this.handleSubmit(values)}
                >
                  <div className="form-group">
                    <label for="email">
                      <span className="fa fa-envelope "></span>
                    </label>
                    <Control.text
                      model=".email"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      validators={{ required }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required  ",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="pass">
                      <span className="fa fa-key "></span>
                    </label>
                    <Control.password
                      model=".password"
                      name="password"
                      id="pass"
                      placeholder="Password"
                      validators={{ required }}
                    />
                    <Errors
                      className="text-danger"
                      model=".password"
                      show="touched"
                      messages={{ required: "Required" }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label for="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                    
                  </div>
                </Form>
                
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-facebook fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-google fa fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
