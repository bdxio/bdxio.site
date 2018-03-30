import React, { Component } from 'react';

const QUOTES = [
    {
        text: '"Each of us is a unique strand in the intricate web of life and here to make a contribution."',
        author: 'Deepak Chopra',
    },
    {
        text: '"Le fossé séparant théorie et pratique est moins large en théorie qu’il ne l’est en pratique."',
        author: ''
    },
    {
        text: '"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."',
        author: 'Tim Berners-Lee'
    },
    {
        text: '"On the Web we all become small-town visitors lost in the big city."',
        author: 'Alison Gopnik'
    },
    {
        text: '"Everyday life is like programming, I guess. If you love something you can put beauty into it."',
        author: 'Donald Knuth'
    },
]

class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rnd = Math.floor(Math.random() * QUOTES.length);
        const quote = QUOTES[rnd];

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