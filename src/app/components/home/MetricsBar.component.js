import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row  align-middle metricsBar">
                <div className="columns hide-for-small-only auto text-center metricsBar-picture">
                    <Link to="/home"><i className="fa fa-2x fa-plus-circle"></i></Link>
                </div>
                <div className="columns small-12 medium-7">
                    <div className="row metricsBar-content align-center">
                        <div className="metrics-item text-center">
                            <h3 className="metricsBar-content-number">46</h3>
                            <div className="metricsBar-content-text">Talks</div>
                        </div>
                        <div className="metrics-item text-center separate-Element">
                            <h3 className="metricsBar-content-number">~50</h3>
                            <div className="metricsBar-content-text">Speakers</div>
                        </div>
                        <div className="metrics-item text-center separate-Element">
                            <h3 className="metricsBar-content-number">500</h3>
                            <div className="metricsBar-content-text">Participants</div>
                        </div>
                        <div className="metrics-item text-center">
                            <h3 className="metricsBar-content-number">1</h3>
                            <div className="metricsBar-content-text">Hackerspace</div>
                        </div>
                        <div className="metrics-item text-center separate-Element">
                            <h3 className="metricsBar-content-number">3</h3>
                            <div className="metricsBar-content-text">Hands'on</div>
                        </div>
                    </div>
                </div>

                <div className="columns hide-for-small-only auto text-center metricsBar-video">
                    <a herf="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-2x fa-play-circle"></i></a>
                </div>
            </div>


        );
    }
}

export default MetricsBar