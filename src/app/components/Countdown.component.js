import React, { Component } from "react";
import Moment from "moment";
import Link from "react-router-dom/es/Link";
import { Constants } from "../constants";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      timeRemaining: null,
      ended: false
    };
    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    const intervalId = setInterval(this.tick, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    const timeRemaining = Moment.duration(
      Constants.eventDate.diff(Moment.now())
    );
    let ended = false;
    if (
      timeRemaining._data.years <= 0 &&
      timeRemaining._data.months <= 0 &&
      timeRemaining._data.days <= 0 &&
      timeRemaining._data.hours <= 0 &&
      timeRemaining._data.minutes <= 0 &&
      timeRemaining._data.seconds <= 0
    ) {
      ended = true;
    }
    this.setState({ timeRemaining, ended });
  }

  render() {
    const { timeRemaining, ended } = this.state;
    return (
      <div className="row">
        {ended
          ? Moment().isSame(Constants.eventDate) ||
            (Moment().isBetween(
              Moment(Constants.eventDate),
              Moment(Constants.endOfLive),
              null,
              "[]"
            ) && (
              <div className="columns auto text-center home-header-button">
                <Link to="/live" className="button medium white">
                  <i className="fa fa-circle blink" />
                  &nbsp; Accéder aux directs
                </Link>
              </div>
            ))
          : timeRemaining && (
              <div className={"columns small-12 align-center countdown"}>
                <div className="small-2 medium-1 text-center">
                  <h2 className="">{timeRemaining._data.months}</h2>
                  <div className="">mois</div>
                </div>

                <div className="small-2 medium-1 text-center countdown-border">
                  <h2 className="">{timeRemaining._data.days}</h2>
                  <div className="">jours</div>
                </div>

                <div className="small-2 medium-1 text-center">
                  <h2 className="">{timeRemaining._data.hours}</h2>
                  <div className="">heures</div>
                </div>

                <div className="small-2 medium-1 text-center countdown-border">
                  <h2 className="">{timeRemaining._data.minutes}</h2>
                  <div className="">minutes</div>
                </div>

                <div className="small-2 medium-1 text-center">
                  <h2 className="">{timeRemaining._data.seconds}</h2>
                  <div className="">secondes</div>
                </div>
              </div>
            )}
      </div>
    );
  }
}

export default Countdown;
