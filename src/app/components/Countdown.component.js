import React, { Component } from 'react';
import Moment from 'moment';

class Countdown extends Component {

    constructor(props) {
        super(props);
        const now = Moment.now();
        const later =  Moment([2018, 11, 9, 8]);
        this.state = {
            timeRemaining:  Moment.duration(later.diff(now))
        };
    }

    render() {
        const { timeRemaining } = this.state;
        return (
            <div className={'text-center'}>
                <div>{timeRemaining._data.months} mois {timeRemaining._data.days} jours {timeRemaining._data.hours} heures {timeRemaining._data.minutes} minutes</div>
            </div>
        );
    }
}

export default Countdown