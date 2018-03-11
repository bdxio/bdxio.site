import React, { Component } from 'react';
import displayPage          from './_PageContainer';
import Countdown            from '../components/Countdown.component';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Bienvenue à BDX I/O 2018 !</h1>
                <div>
                    <span>10 novembre</span>
                    <span>EINSERB</span>
                </div>

                <Countdown />
            </div>
        );
    }
}

export default displayPage(Home)