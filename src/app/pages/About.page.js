import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

export default displayPage(About)