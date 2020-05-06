import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    data: "",
    data2: "",
    data3: "",
    data4: "",
  };

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 5000); //getting api every 5 sec
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
        <article>
          <h1>[{this.state.data5}]</h1>
          <label>Crew:</label>
          <h2>[{this.state.data4}]</h2>
          <label> Student ID:</label>
          <h3>[{this.state.data}]</h3>
          <label> Students in queue:</label>
          <h5 className="spinner">{this.state.data2}</h5>
          <label>Logged At:</label>
          <h3>[{this.state.data3}]</h3>
        </article>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
