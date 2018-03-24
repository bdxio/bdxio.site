import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row  align-middle metricsBar">
                <div className="columns small-2 align-center metricsBar-picture">
                    <Link to="/gallery">+</Link>
                </div>

                <div className="columns auto">
                    <div className="row metricsBar-content text-center">
                        <div className="columns small-4">
                            <h3 className="metricsBar-content-number">500</h3>
                            <div className="">PARTICIPANTS</div>
                        </div>
                        <div className="columns small-4 seperateElement">
                            <h3 className="metricsBar-content-number">52</h3>
                            <div className="">TALKS</div>
                        </div>
                        <div className="columns small-4">
                            <h3 className="metricsBar-content-number">52</h3>
                            <div className="">SPEAKERS</div>
                        </div>
                    </div>
                </div>

                <div className="columns small-2 align-center metricsBar-video">
                    <Link to="/videos">Play</Link>
                </div>
            </div>


        );
    }
}

export default MetricsBar