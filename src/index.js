import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    data: "",
    data2: "",
  };

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  }

  getData() {
    /*  fetch("https://api.chucknorris.io/jokes/random") */
    fetch("https://kea-alt-del.dk/kata-distortion/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          data: res.id,
          data2: res.inQueue,
          data3: res.loggedAt,
          data4: res.personel,
          data5: res.name,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="contentwrapper">
        <label>Bar:</label>
        <h1>{this.state.data5}</h1>
        <label>Personel:</label>
        <h2>{this.state.data4}</h2>
        <label>ID:</label>
        <h3>{this.state.data}</h3>
        <label>inQueue:</label>
        <h3>{this.state.data2}</h3>
        <label>Logged At:</label>
        <h3>{this.state.data3}</h3>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
