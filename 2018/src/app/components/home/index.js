import React, { Component } from 'react';
import Layout from '../layout';

import Countdown from './Countdown'

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <h1>Bienvenue à BDX I/O 2018 !</h1>
                <div>
                    <span>10 novembre</span>
                    <span>EINSERB</span>
                </div>

                <Countdown />
            </Layout>
        );
    }
}

export default Home