import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class Team extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Team</h1>
            </div>
        );
    }
}

export default displayPage(Team)