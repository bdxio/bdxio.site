import React, { Component } from 'react';
import displayPage          from './_PageContainer';

class News extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>News</h1>
            </div>
        );
    }
}

export default displayPage(News)