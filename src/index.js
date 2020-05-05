import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    data: "",
  };

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 5000);
  }

  getData() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          data: res.value,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.data}</p>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
