import React from 'react'
import { Spinner } from "react-bootstrap";
import './LoadingComponent.css'

function LoadingComponent() {
    return (
      <div id="loading">
        {/* <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> */}
      <div class="loader">Loading...</div>
      </div>
    )
}

export default LoadingComponent
