import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SignupComponent.css";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || val.length >= len;

// const validImage = () => {
//   var image = document.getElementById("profileimg");
//   var reg = /(.*?)\.(jpg|bmp|jpeg|png)$/;
//   if (image != null) {
//     return !image.match(reg);
//   }else
//   return false
// };
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPhone = (val) => /^\d{10}$/.test(val);
const validWard = (val) => !isNaN(Number(val));

export default class SignupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
    };
  }

  imageChange = (e) => {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        img: reader.result,
      });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  HandleSubmit = (values) => {
    const formData = new FormData(document.getElementById("register-form"));
    this.props.postRegistration(formData);
    // console.log("Current State is:" + JSON.stringify(values));
    // alert("Current State is:" + JSON.stringify(values));
    this.props.resetRegistrationForm();
  };

  render() {
    return (
      <div>
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Register</h2>
                <Form
                  model="registration"
                  className="register-form"
                  id="register-form"
                  onSubmit={(values) => this.HandleSubmit(values)}
                >
                  <div className="form-group">
                    <label for="name">
                      <span className="fa fa-user "></span>
                    </label>
                    <Control.text
                      model=".name"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      validators={{ required, minLength: minLength(3) }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must 3 characters or above",
                      }}
                    />
                  </div>
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
                      validators={{ required, validEmail }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required  ",
                        validEmail: "Must be valid email",
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
                    <label for="phone">
                      <span className="fa fa-phone "></span>
                    </label>
                    <Control.text
                      model=".mobile_no"
                      type="text"
                      name="mobile_no"
                      id="mobil_no"
                      placeholder="Your phone no"
                      validators={{ required, validPhone }}
                    />
                    <Errors
                      className="text-danger"
                      model=".mobile_no"
                      show="touched"
                      messages={{
                        required: "Required ",
                        validPhone: "Must be valid Mobile no",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="address">
                      <span className="fa fa-address-card-o"></span>
                    </label>
                    <Control.textarea
                      model=".address"
                      name="address"
                      id="address"
                      rows="3"
                      className="form-control"
                      placeholder="Your address"
                    />
                  </div>
                  <div className="form-group">
                    <label for="ward">
                      <span className="fa fa-map-pin  "></span>
                    </label>

                    <Control.select
                      model=".ward"
                      type="text"
                      name="ward"
                      id="ward"
                      placeholder="Your ward no"
                      className="form-control"
                      validators={{ required, validWard }}
                    >
                      <option>Your ward no.</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                    <Errors
                      className="text-danger"
                      model=".ward"
                      show="touched"
                      messages={{
                        required: "Required",
                        validWard: "Select ward no.",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="profileimg">
                      <span className="fa fa-file-image-o"></span>
                    </label>
                    <Control.file
                      model=".profileimg"
                      name="Image"
                      id="profileimg"
                      // validators={validImage}
                      onChange={this.imageChange}
                    />
                    {/* <Errors
                      className="text-danger"
                      model=".profileimg"
                      show="touched"
                      messages={{
                        validImage: "Image",
                      }}
                    /> */}
                  </div>
                  <div className="form-group">
                    {this.state.img != "" ? (
                      <img id="prflimg" src={this.state.img} />
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label for="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in{" "}
                      <a href="#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </Form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src="/assets/images/pmsimg.png" alt="register image" />
                </figure>
                <NavLink to="/login">
                  <a href="#" className="signup-image-link">
                    I am already member
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
