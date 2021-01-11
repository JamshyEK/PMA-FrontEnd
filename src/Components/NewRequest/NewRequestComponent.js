import React, { Component } from "react";

import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
export default class NewRequestComponent extends Component {
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
    const formData = new FormData(document.getElementById("request-form"));
    this.props.postRequest(formData);

     this.props.resetRequestForm();
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* <div class="col-lg-4 col-xlg-3 col-md-12">
                <div class="white-box">
                  <div class="user-bg">
                    {" "}
                    <img
                      width="100%"
                      alt="user"
                      src="assets/images/pmsimg.png"
                    />
                    <div class="overlay-box">
                      <div class="user-content">
                        <a href="javascript:void(0)">
                          <img
                            src={""}
                            class="thumb-lg img-circle"
                            alt="img"
                          />
                        </a>
                        <h4 class="text-white mt-2">
                          {}
                        </h4>
                        <h5 class="text-white mt-2">
                          {}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="user-btm-box mt-5 d-md-flex">
                    <div class="col-md-4 col-sm-4 text-center">
                      <h1></h1>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                      <h1>{}</h1>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                      <h1></h1>
                    </div>
                  </div>
                </div>
              </div> */}

            <div className="col-lg-8 col-xlg-9 col-md-12">
              <div className="card">
                <div className="card-body">
                  <Form
                    model="request"
                    id="request-form"
                    className="form-horizontal form-material"
                    onSubmit={(values) => this.HandleSubmit(values)}
                  >
                    <div className="form-group mb-4 ">
                      <label className="col-sm-12 p-0">Type</label>
                      <div className="col-sm-12 border-bottom">
                        <Control.select
                          className="form-control p-0 border-0"
                          model=".type"
                          name="type"
                          id="type"
                        >
                          <option value="Plastic collect">
                            Plastic collect
                          </option>
                          <option value="Paper bag collect">
                            Paper bag collect
                          </option>
                        </Control.select>
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Quantity</label>
                      <div className="col-md-12 border-bottom p-0">
                        <Control.text
                          model=".quantity"
                          className="form-control p-0 border-0"
                          name="quantity"
                          id="quantity"
                          placeholder="Item Quantity"
                          validators={{ required, isNumber }}
                        />
                        <Errors
                          className="text-danger"
                          model=".quantity"
                          show="touched"
                          messages={{
                            required: "Required",
                            isNumber: "Must be number",
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Image</label>
                      <div className="col-md-12 border-bottom p-0">
                        <Control.file
                          model=".requestimg"
                          name="Image"
                          id="requestimg"
                          className="form-control p-0 border-0"
                          validators={required}
                          onChange={this.imageChange}
                        />
                        <Errors
                          className="text-danger"
                          model=".requestimg"
                          show="touched"
                          messages={{
                            required: "Required",
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      {this.state.img !== "" ? (
                        <img id="prflimg" src={this.state.img} />
                      ) : null}
                    </div>
                    <div className="form-group mb-4">
                      <div className="col-sm-12">
                        <button className="btn btn-success">
                          Sent Request
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}
