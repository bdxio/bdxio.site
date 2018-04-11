import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-header">
                <div className="home-homeFlottant">
                    <img className="homeFlottant" src="img/svg/home_flottant.svg" />
                </div>
                <div className="row home-header">
                    <h1 className="columns text-center">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header