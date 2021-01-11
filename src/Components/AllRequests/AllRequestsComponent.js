import React, { Component } from 'react'
import Loading from '../Loading/LoadingComponent'
import ErrorNotFound from '../ErrorsCom/Error404'
import RequestCard from '../RequestCard/RequestCardComponent'

export default class AllRequestsComponent extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchAllRequests()
    }
    render() {
        {if(this.props.allRequest.loading){
            return <Loading/>
        }
    else if(this.props.allRequest.allRequestErr){
     return <ErrorNotFound  error={this.props.allRequest.allRequestErr}/>
    }
     else   
         {return(
            <div>

            {
                this.props.allRequest.allRequest.map(x=>{
                    return(
                      <div>
                      <RequestCard details={x} id={x._id} deleteRequest={this.props.deleteRequest} profile={this.props.profile} updateRequest={this.props.updateRequest}/>
                    {/* <div className="card ">
                   
      <div className="row">
        <div className="col-sm-5">
          <img className="d-block w-100" src="https://picsum.photos/150?image=641" alt=""/>
        </div>
        <div className="col-sm-7">
          <div className="card-block">
            <p>Copy paste the HTML and CSS.</p>
            <p>Change around the content for awsomenes</p>
            <br/>
            <a href="#" className="btn btn-primary btn-sm float-right">Read More</a>
          </div>
        </div>
 
      </div>
    </div> */}
    </div>
                    )
                    
                })
            }
            </div>
        )}}
    }
}
