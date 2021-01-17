import React from "react";
import "./RequestCardComponent.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../shared/baseUrl";

function RequestCardComponent(props) {
  const image = baseUrl + props.details.image;
  const Id = props.id;
  return (
    <div key={props.id}>
      <div className="blog-card">
        <div className="meta">
          <Link to={`/request/${props.id}`}>
            <div
              className="photo"
              style={{
                backgroundImage: "url(" + image.replace(/\\/g, "/") + ")",
              }}
            ></div>
            <ul className="details">
              {/* <li className="author">
              <a href="#">John Doe</a>
            </li> */}
              <li className="date">{props.details.requestedDate}</li>
              
            </ul>
          </Link>
        </div>

        <div className="description">
          <div className="row">
            <div className="col-8">
              <h1>{props.details.requestType.toUpperCase()} </h1>
             
            </div>
            <div className="col-4">
              {" "}
              {props.details.requestStaus == "Pending" ? (
                <a
                  id="status"
                  className="btn btn-warning btn-rounded waves-effect waves-light m-b-40 float-right"
                >
                  {props.details.requestStaus}
                </a>
              ) : props.details.requestStaus == "Approved" ? (
                <a
                  id="status"
                  className="btn btn-success btn-rounded waves-effect waves-light m-b-40 float-right"
                >
                  {props.details.requestStaus}
                </a>
              ) : props.details.requestStaus == "Rejected" ? (
                <a
                  id="status"
                  className="btn btn-danger btn-rounded waves-effect waves-light m-b-40 float-right"
                >
                  {props.details.requestStaus}
                </a>
              ) : (
                <a
                  id="status"
                  className="btn btn-primary btn-rounded waves-effect waves-light m-b-40 float-right"
                >
                  {props.details.requestStaus}
                </a>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <h2>
                    <i class="fa fa-archive fa-2x" aria-hidden="true"></i>
                  </h2>
                </div>
                <div className="col-8">
                  <p id="weight">
                    {props.details.quantity}
                    <span> kg</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
          </div>

          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              {props.profile.role === "user" ? (
                <button
                  type="button"
                  class="btn btn-danger float-right"
                  onClick={() => props.deleteRequest(Id)}
                >
                  <i class="fa fa-trash" aria-hidden="true">
                    {" "}
                    Delete
                  </i>
                </button>
              ) : props.profile.role === "admin" ? (
                
                  props.details.requestStaus==="Pending"?(  <div className="float-right">
                <button
                  type="button"
                  class="btn btn-success "
                  onClick={() => props.updateRequest(Id,"Approved")}
                >
                  <i class="fa fa-check" aria-hidden="true">
                    {" "}
                    Approve
                  </i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger "
                  onClick={() => props.updateRequest(Id,"Rejected")}
                >
                  <i class="fa fa-times" aria-hidden="true">
                    {" "}
                    Reject
                  </i>
                </button>
                </div>):props.details.requestStaus==="Rejected"?(
                  <div className="float-right">
                  <button
                  type="button"
                  class="btn btn-success "
                  onClick={() => props.updateRequest(Id,"Approved")}
                >
                  <i class="fa fa-check" aria-hidden="true">
                    {" "}
                    Approve
                  </i>
                </button>
                </div>):props.details.requestStaus==="Approved"?(
                  <div className="float-right">
                  <button
                  type="button"
                  class="btn btn-danger "
                  onClick={() => props.updateRequest(Id,"Rejected")}
                >
                  <i class="fa fa-times" aria-hidden="true">
                    {" "}
                    Reject
                  </i>
                </button>
                </div>): null
                


               
              ) :    
               (<div className="float-right">
               <button
                  type="button"
                  class="btn btn-primary "
                  onClick={() => props.updateRequest(Id,"Collected")}
                >
                  <i class="fa fa-check-square" aria-hidden="true">
                    {" "}
                    Collect
                  </i>
                </button>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCardComponent;
