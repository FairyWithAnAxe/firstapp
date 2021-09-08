import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 10,
            seconds: 10
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        let timerJSON = localStorage.getItem("timer");
        let timer = JSON.parse(timerJSON);

        this.setState(
            {
                minutes: Number(timer.minutes),
                seconds: Number(timer.seconds)
            }
        )
    }

    start = () => {
        let scope = this;
        let timerId = setInterval(() => {
            scope.setState({
                seconds: scope.state.seconds + 1
            })
        }, 1000);
        this.setState({ timerId: timerId });
    }

    stop = () => {
        clearInterval(this.state.timerId);
    }

    render() {
        return (
            <div>
                <p>Timer info: {this.state.minutes}:{this.state.seconds}</p>
                <div>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.start}>Start</button>
                </div>
            </div>
        )
    }
}
