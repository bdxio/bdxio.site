import React, { Component } from 'react';

class Countdown extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <span>211 jours</span>
                <span>18 heures</span>
                <span>27 minutes</span>
                <span>34 secondes</span>
            </div>
        );
    }
}

export default Countdown