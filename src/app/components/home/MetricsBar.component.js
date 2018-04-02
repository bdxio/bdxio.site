import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row  align-middle metricsBar">
                <div className="columns small-2 text-center metricsBar-picture">
                    <Link to="/gallery"><i class="fa fa-plus-circle"></i></Link>
                </div>

                <div className="columns auto">
                    <div className="row metricsBar-content text-center">
                        <div className="columns">
                            <h3 className="metricsBar-content-number">46</h3>
                            <div className="">TALKS</div>
                        </div>
                        <div className="columns seperateElement">
                            <h3 className="metricsBar-content-number">~50</h3>
                            <div className="">SPEAKERS</div>
                        </div>
                        <div className="columns seperateElement">
                            <h3 className="metricsBar-content-number">500</h3>
                            <div className="">PARTICIPANTS</div>
                        </div>
                        <div className="columns seperateElement">
                            <h3 className="metricsBar-content-number">1</h3>
                            <div className="">Hackerspace</div>
                        </div>
                        <div className="columns">
                            <h3 className="metricsBar-content-number">3</h3>
                            <div className="">Hands'on</div>
                        </div>
                    </div>
                </div>

                <div className="columns small-2 text-center metricsBar-video">
                    <a herf="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i class="fa fa-play-circle"></i></a>
                </div>
            </div>


        );
    }
}

export default MetricsBar