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
            <div className="row align-middle home-team">
                <h6 className="columns text-center home-team-content">
                    {quote.text}<br />
                    {quote.author}
                </h6>
            </div>
        );
    }
}

export default Quote;