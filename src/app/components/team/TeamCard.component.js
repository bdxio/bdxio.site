import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div>
                <img src={member['Avatar url']} alt={member['Nom']} width="100" />
                <h4>{`${member['Prénom']} ${member['Nom']}`}</h4>
                <p>{member['Bio']}</p>
                {!!member['Twitter'] &&
                    <a href={`https://twitter.com/${member['Twitter']}`}>Twitter</a>
                }
                {!!member['Linkedin'] &&
                    <a href={member['Linkedin']}>LinkedIn</a>
                }
            </div>
        );
    }
}

TeamCard.propTypes = {
    member: PropTypes.object.isRequired,
};

export default TeamCard;