import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Layout extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout