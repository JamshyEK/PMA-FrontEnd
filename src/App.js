import React, { Component } from "react";
import Main from "./Components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
