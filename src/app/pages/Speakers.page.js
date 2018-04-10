import React, { Component } from 'react';
import Header from '../components/common/Header.component';
import displayPage from './_PageContainer';

class Speakers extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="SPEAKERS" />
                <div className="row">
                </div>
            </div>
        );
    }
}

export default displayPage(Speakers)