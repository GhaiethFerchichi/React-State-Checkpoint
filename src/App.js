import "./App.css";
import React, { Component } from "react";
import Profile from "./components/profile/Profile";

export default class App extends Component {
  state = {
    person: {
      fullName: "Ghaieth Ferchichi",
      bio:
        "this is my bio jkb kjdbjk bdfjbsd kf bsdkjb fsdbfsdbfjk bdskjb dkfjbsdkjfbdkbfkjdfjk sdf bsdkj f",
      imgSrc:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      profession: "Developer"
    },
    show: false,
    time: 0
  };

  componentDidMount() {
    setInterval(this.timeHandler, 1000);
  }

  timeHandler = () => {
    const { time } = this.state;
    this.setState({ time: time + 1 });
  };

  handleShowState = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  formatTime = time => {
    const padNumber = nbr => {
      return ("" + nbr).padStart(2, "0");
    };
    return `${padNumber((time / 60 ** 2).toFixed())}:${padNumber(
      ((time / 60) % 60).toFixed()
    )}:${padNumber(time % 60)}`;
  };
  render() {
    const { show, time, person } = this.state;
    return (
      <div className='App'>
        <div>{this.formatTime(time)}</div>
        <button onClick={this.handleShowState}>
          {show ? "Hide" : "Show"} Profile{" "}
        </button>
        {show && <Profile {...person} />}
      </div>
    );
  }
}
