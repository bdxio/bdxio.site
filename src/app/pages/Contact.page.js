import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>contact</h1>
            </div>
        );
    }
}

export default displayPage(Contact)