import React, { Component } from 'react';
import Moment from 'moment';
import { Constant } from '../constants';


class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
            timeRemaining: null
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
        this.setState({
            timeRemaining: Moment.duration(Constant.eventDate.diff(Moment.now()))
        })
    }

    render() {
        const { timeRemaining } = this.state;
        return (
            <div className={'text-center'}>
                {timeRemaining &&
                    <div>{timeRemaining._data.months} mois {timeRemaining._data.days} jours {timeRemaining._data.hours} heures {timeRemaining._data.minutes} minutes {timeRemaining._data.seconds} secondes</div>
                }
            </div>
        );
    }
}

export default Countdown