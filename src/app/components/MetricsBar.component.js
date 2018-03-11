import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div><Link to="/gallery">+</Link></div>
                <div>500 PARTICIPANTS</div>
                <div>55 TALKS</div>
                <div>52 SPEAKERS</div>
                <div><Link to="/videos">Play</Link></div>
            </div>
        );
    }
}

export default MetricsBar