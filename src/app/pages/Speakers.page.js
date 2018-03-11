import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class Speakers extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Speakers</h1>
            </div>
        );
    }
}

export default displayPage(Speakers)