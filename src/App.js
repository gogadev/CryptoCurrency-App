import React, { Component } from "react";
import axios from "axios";

import Header from "./components/header/Header";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD"
      )
      .then((res) => {
        const cryptos = res.data;
        this.setState({
          cryptos: cryptos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { cryptos } = this.state;
    return (
      <React.Fragment>
        <Header />
        {Object.keys(cryptos).map((key) => (
          <div className="section" key={key}>
            <span className="key">{key}</span>
            <span className="value">${cryptos[key].USD}</span>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
