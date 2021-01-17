import React, { Component } from "react";
import Loading from "../Loading/LoadingComponent";
import ErrorNotFound from "../ErrorsCom/Error404";
import RequestCard from "../RequestCard/RequestCardComponent";

export default class AllRequestsComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllRequests();
  }
  render() {
    const allRequest =
      this.props.profile === "admin"
        ? this.props.allRequestAdmin
        : this.props.allRequest;
    {
      if (allRequest.loading) {
        return <Loading />;
      } else if (allRequest.allRequestErr) {
        return <ErrorNotFound error={allRequest.allRequestErr} />;
      } else {
        return (
          <div>
            {allRequest.allRequest.map((x) => {
              return (
                <div>
                  <RequestCard
                    details={x}
                    id={x._id}
                    deleteRequest={this.props.deleteRequest}
                    profile={this.props.profile}
                    updateRequest={this.props.updateRequest}
                  />
                </div>
              );
            })}
          </div>
        );
      }
    }
  }
}
