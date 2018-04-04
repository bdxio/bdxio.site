import React, { Component } from 'react';
import { Constant } from '../../constants';

class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rnd = Math.floor(Math.random() * Constant.quotes.length);
        const quote = Constant.quotes[rnd];

        return (
            <div className="row align-middle align-center home-team">
                <div className="home-team-content">
                    <h5 className="columns text-center ">
                        {quote.text}
                    </h5>
                    <h6 className="columns text-center">
                        {quote.author}
                    </h6>
                </div>
            </div>
        );
    }
}

export default Quote;