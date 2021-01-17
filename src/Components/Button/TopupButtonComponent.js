import React, { Component } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { baseUrl, headers } from "../../shared/baseUrl";
import axios from "axios";
export default class TopupButtonComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      error: "",
      amount: "",
      inputAmount: false,
    };
  }


  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  ChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ error: "Required" });
    } else if (isNaN(event.target.value)) {
      this.setState({ error: "Must be number" });
    } else if (event.target.value < 100) {
      this.setState({ error: "Amount must be 100 or greater " });
    } else {
      this.setState({
        error: "",
        inputAmount: true,
        amount: event.target.value,
      });
    }
  };

  loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var test = this;
    if (this.state.inputAmount) {
      this.setState({ inputAmount: false });
      const res = await this.loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const value = { credit: this.state.amount };
      const __DEV__ = document.domain === "localhost";
      return axios
        .post(baseUrl + "user/razorpay", value, { headers: headers })
        .then((t) => {
          // t.json()
          console.log(t);
          const options = {
            key: __DEV__ ? "rzp_test_breDs72UwpndFn" : "PRODUCTION_KEY",
            currency: t.data.currency,
            amount: t.data.amount.toString(),
            order_id: t.data.id,
            name: "Coin Purchase",
            description: "Thank you for purchasing coin",
            image: "/assets/images/pms.png",
            handler: function (response) {
              // alert(response.razorpay_payment_id);
              // alert(response.razorpay_order_id);
              // alert(response.razorpay_signature);
              // alert("Payment Success");
              axios
                .put(baseUrl + "user/updateCredit", value, { headers: headers })
                .then((res) => {
             
                  console.log(res.data.credit);
                  alert("Payment Success");
                  test.props.updateProfileCredit(res.data.credit);
                })
                .catch((x) => {
                  alert("Credit update error");
                });
            },
            prefill: {
              // name,
              email: "pms@pms.com",
              phone_number: "1234567890",
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
          this.setState({ show: false });
        })
        .catch((x) => {
          alert("payment error");
        });
    } else {
      if (this.state.amount === "") {
        this.setState({ error: "Required" });
      } else if (isNaN(this.state.amount)) {
        this.setState({ error: "Must be number" });
      } else if (this.state.amount < 100) {
        this.setState({ error: "Amount must be 100 or greater " });
      }
      // this.setState({ error: "" })
      return false;
    }
  };

  render() {
    return (
      <div>
        <Button
          variant="danger"
          className="btn btn-md btn-block"
          onClick={this.handleShow}
        >
        
          Topup Wallet
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Topup Wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group as={Row} controlId="formAmount">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    id="amount"
                    placeholder="Enter your amount"
                    name="amount"
                    onChange={this.ChangeHandler}
                  />
                  <p className="text-danger">{this.state.error}</p>
                </Col>
                <Form.Label column sm="2"></Form.Label>
              </Form.Group>

              <Form.Group as={Row} controlId="formButton">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="8" className="text-center">
                  <Button variant="danger" type="submit">
                    Topup
                  </Button>
                </Col>
                <Form.Label column sm="2"></Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
