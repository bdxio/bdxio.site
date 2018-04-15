import React, { Component } from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="CONTACT" />
                <div className="row contact">

                </div>
            </div>
        );
    }
}

export default displayPage(Contact)