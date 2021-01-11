import React, { Component } from "react";
import Loading from '../Loading/LoadingComponent'
import ErrorNotFound from '../ErrorsCom/Error404'
import { baseUrl } from "../../shared/baseUrl";

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    {
      if (this.props.profile.loading) {
        return <Loading />;
      } else if (this.props.profile.profileErr) {
        return <ErrorNotFound error={this.props.profile.profileErr} />;
      } else {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-xlg-3 col-md-12">
                <div className="white-box">
                  <div className="user-bg">
                    {" "}
                    <img
                      width="100%"
                      alt="user"
                      src="assets/images/pmsimg.png"
                    />
                    <div className="overlay-box">
                      <div className="user-content">
                        <a href="javascript:void(0)">
                          <img
                            src={baseUrl + this.props.profile.profile.image}
                            className="thumb-lg img-circle"
                            alt="img"
                          />
                        </a>
                        <h4 className="text-white mt-2">
                          {this.props.profile.profile.name}
                        </h4>
                        <h5 className="text-white mt-2">
                          {this.props.profile.profile.email}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="user-btm-box mt-5 d-md-flex">
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1></h1>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>{this.props.profile.profile.credit}</h1>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1></h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-xlg-9 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form className="form-horizontal form-material">
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Name</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder={this.props.profile.profile.name}
                            className="form-control p-0 border-0"
                          />{" "}
                        </div>
                      </div>
                      {/* <div class="form-group mb-4">
                                        <label for="example-email" class="col-md-12 p-0">Email</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="email" placeholder={this.props.profile.profile.email}
                                                class="form-control p-0 border-0" name="example-email"
                                                id="example-email" readOnly />
                                        </div>
                                    </div> */}

                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Phone No</label>
                        <div class="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder={this.props.profile.profile.mobile}
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Ward No.</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder={this.props.profile.profile.ward}
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Address</label>
                        <div className="col-md-12 border-bottom p-0">
                          <textarea
                            rows="3"
                            placeholder={this.props.profile.profile.address}
                            className="form-control p-0 border-0"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Image</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="file"
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      {/* <div class="form-group mb-4">
                                        <label class="col-sm-12">Ward No.</label>
                                        <div class="col-sm-12 border-bottom">
                                            <select class="form-control p-0 border-0">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div> */}
                      <div className="form-group mb-4">
                        <div className="col-sm-12">
                          <button className="btn btn-success">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}
