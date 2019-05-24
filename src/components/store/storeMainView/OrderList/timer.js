import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 0 };
    this.startTimer = this.startTimer.bind(this);
    this.countUp = this.countUp.bind(this);
  }

  secondsToTime(secs) {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      m: minutes,
      s: seconds
    };

    return obj;
  }

  componentDidMount() {
    this.startTimer();
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    setInterval(this.countUp, 1000);
  }

  countUp() {
    let seconds = this.state.seconds + 1;
    if (seconds === 10 || seconds === 20) {
      this.props.setColor(seconds);
    }
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });
  }

  render() {
    return (
      <div>
        {`0${this.state.time.m}`} : {this.state.time.s}
      </div>
    );
  }
}

export default Timer;
