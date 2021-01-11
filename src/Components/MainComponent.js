import React, { Component } from "react";
import Header from "./Header/HeaderComponent";
import Footer from "./Footer/FooterComponent";
import Register from "./Signup/SignupComponent";
import Login from "./Signin/SigninComponent";
import Sidebar from "./Sidebar/sidebarComponent";
import Profile from "./Profile/ProfileComponent";
import NewRequest from "./NewRequest/NewRequestComponent";
import AllRequests from "./AllRequests/AllRequestsComponent";
import RequestDetailCard from "./RequestCard/RequestDetailCardComponent";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { postRegistration } from "../redux/RegistrationForm/registrationAction";
import { postLogin } from "../redux/LoginForm/loginAction";
import { postRequest } from "../redux/RequestForm/requestAction";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
  loginSuccess,
  logoutSuccess,
  loginFailed,
} from "../redux/Profile/profileAction";

import { fetchProfile } from "../redux/UsersProfile/UserProfileAction";
import { fetchAllRequests,deleteRequest } from "../redux/AllRequests/AllRequestAction";
import {fetchAllRequestsAdmin,updateRequest} from '../redux/AllRequestsAdmin/AllRequestAction'
import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    profileStatus: state.profileStatus,
    profileDetails: state.profileDetails,
    allRequest: state.allRequest,
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetLoginForm: () => {
    dispatch(actions.reset("login"));
  },
  resetRegistrationForm: () => {
    dispatch(actions.reset("registration"));
  },
  resetRequestForm: () => {
    dispatch(actions.reset("request"));
  },
  postRegistration: (values) => {
    postRegistration(values);
  },
  postRequest: (values) => {
    postRequest(values);
  },
  postLogin: async (values) => {
    const profileDetails = await postLogin(values, dispatch);
    console.log("------", profileDetails);
    if (profileDetails !== undefined) {
      // postLogin(values,dispatch).then(r=>console.log("======",r)).catch(e=>console.log(e))
      dispatch(loginSuccess(profileDetails));
    } else {
      dispatch(loginFailed());
    }
  },
  logout: () => {
    dispatch(logoutSuccess());
    localStorage.removeItem("token");
    // window.parent.location.reload();
  },

  fetchProfile: () => {
    dispatch(fetchProfile());
  },
  fetchAllRequests: () => {
    dispatch(fetchAllRequests());
  },

  deleteRequest: (id) => {
    dispatch(deleteRequest(id));
  },
  fetchAllRequestsAdmin:()=>{
    dispatch(fetchAllRequestsAdmin())
  },
  updateRequest:(id,status)=>{
    dispatch(updateRequest(id,status))
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchProfile();

  // }

  render() {
    const requestWithId = ({ match }) => {
      return this.props.profileStatus.isLoggedIn ? (
        <RequestDetailCard
          request={
            this.props.allRequest.allRequest.filter(
              (request) => request._id === match.params.requestId
            )[0]
          }
        />
      ) : (
        <Redirect to="/" />
      );
    };

    return (
      <>
        <Row>
          {!this.props.profileStatus.isLoggedIn ? null : (
            <Col xs={2}>
              <Sidebar profile={this.props.profileStatus} />
            </Col>
          )}

          <Col xs={this.props.profileStatus.isLoggedIn ? 10 : 12}>
            <Header
              profile={this.props.profileStatus}
              logout={this.props.logout}
            />
            <Switch>
              <Route
                path="/register"
                render={() =>
                  this.props.profileStatus.isLoggedIn === false ? (
                    <Register
                      resetRegistrationForm={this.props.resetRegistrationForm}
                      postRegistration={this.props.postRegistration}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
                // component={() => (
                //   <Register
                //     resetRegistrationForm={this.props.resetRegistrationForm}
                //     postRegistration={this.props.postRegistration}
                //   />
                // )}
              />
              <Route
                path="/login"
                render={() =>
                  this.props.profileStatus.isLoggedIn === false ? (
                    <Login
                      postLogin={this.props.postLogin}
                      resetLogin={this.props.resetLoginForm}
                      profile={this.props.profileStatus}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
                // component={() => (
                //   <Login
                //     // resetRegistrationForm={this.props.resetRegistrationForm}
                //     postLogin={this.props.postLogin}
                //     resetLogin={this.props.resetLoginForm}
                //     profile={this.props.profileStatus}
                //   />
                // )}
              />
              <Route
                path="/profile"
                render={() =>
                  this.props.profileStatus.isLoggedIn === true ? (
                    <Profile
                      fetchProfile={this.props.fetchProfile}
                      profile={this.props.profileDetails}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />

              <Route
                path="/new_request"
                render={() =>
                  this.props.profileStatus.isLoggedIn === true ? (
                    <NewRequest
                      postRequest={this.props.postRequest}
                      resetRequestForm={this.props.resetRequestForm}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />

              <Route
                path="/all_request"
                render={() =>
                  this.props.profileStatus.isLoggedIn === true ? (
                    <AllRequests
                      fetchAllRequests={this.props.fetchAllRequests}
                      allRequest={this.props.allRequest}
                      profile={this.props.profileStatus}
                      deleteRequest={this.props.deleteRequest}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
               <Route
                path="/all_request_admin"
                render={() =>
                  this.props.profileStatus.isLoggedIn === true && this.props.profileStatus.role==="admin" ? (
                    <AllRequests
                      fetchAllRequests={this.props.fetchAllRequestsAdmin}
                      allRequest={this.props.allRequest}
                      profile={this.props.profileStatus}
                      updateRequest={this.props.updateRequest}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
                    <Route
                path="/signup_kudumbashree"
                render={() =>
                  this.props.profileStatus.isLoggedIn === true && this.props.profileStatus.role==="admin" ? (
                    <Register
                      resetRegistrationForm={this.props.resetRegistrationForm}
                      postRegistration={this.props.postRegistration}
                      profile={this.props.profileStatus}
                    />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
              <Route
                exact
                path="/request/:requestId"
                component={requestWithId}
              />
              <Redirect to="/" />
            </Switch>
          </Col>
        </Row>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
