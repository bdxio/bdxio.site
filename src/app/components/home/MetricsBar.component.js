import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="columns align-middle metricsBar">
                <div className="row">
                    <div className="columns small-6 align-center align-middle metricsBar-content"><Link to="/gallery">+</Link></div>

                    <div className="columns auto align-center align-middle metricsBar-content">
                        <div className="row">
                            <h4 className="columns metricsBar-content-number">500</h4>
                            <div className="columns">PARTICIPANTS</div>
                        </div>
                        <div className="row">
                            <h4 className="columns metricsBar-content-number">52</h4>
                            <div className="columns">TALKS</div>
                        </div>
                        <div className="row">
                            <h4 className="columns metricsBar-content-number">52</h4>
                            <div className="columns">SPEAKERS</div>
                        </div>
                    </div>

                    <div className="columns small-6 align-center align-middle metricsBar-content"><Link to="/videos">Play</Link></div>
                </div>
            </div>

        );
    }
}

export default MetricsBar