import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class Faq extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Faq</h1>
            </div>
        );
    }
}

export default displayPage(Faq)