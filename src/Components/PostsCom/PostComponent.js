import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import './PostComponent.css'


export default class PostComponent extends Component {
    render() {
        return (
            <div>
      <Carousel>
  <Carousel.Item>
    <img
    id="carousel"
      className="d-block w-100"
      src="/assets/images/noplastic.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     id="carousel"
      className="d-block w-100"
      src="/assets/images/plastic2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>

<div className="container-fluid">
  <div className="row">
    <div className="col">
    <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="cartoonVideo" className="embed-responsive-item" width="560" height="315" src="//www.youtube.com/embed/IA9O9YUbQew" allowfullscreen></iframe>
                  </div>
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
 
</div>
            </div>
        )
    }
}
