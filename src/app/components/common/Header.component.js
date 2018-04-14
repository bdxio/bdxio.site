import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row pageHeader">
                <div className="columns small-24">
                    <h1 className="sectionTitle text-center">{this.props.title}</h1>
                </div>
                <div className="newsFlottant">
                    <img className="newsFlottant" src="img/svg/price_flottant.svg" />
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header