import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorCom.css";
function ErrorNotFound(props) {
  return (
    <div>
      <div className="error-box">
        <div className="error-body text-center">
          <img id="error" src="/assets/images/error.png" alt="error image" />

          {/* <h1 className="error-title text-danger">404</h1> */}
          <h3 className="text-uppercase error-subtitle">{props.error}</h3>

          <p className="text-muted m-t-30 m-b-30">
            YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
          </p>
          <NavLink to="/">
            <a
              className="btn btn-danger btn-rounded waves-effect waves-light m-b-40"
            >
              Back to home
            </a>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ErrorNotFound;
