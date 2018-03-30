import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PartnerCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { partner } = this.props;
        return (
            <div>
                {partner['Société']}
                <img src={partner['Logo url']} alt={partner['Société']} width="100" />
                <a href={partner['Site']}>Site web</a>
            </div>
        );
    }
}

PartnerCard.propTypes = {
    partner: PropTypes.object.isRequired,
}

export default PartnerCard;