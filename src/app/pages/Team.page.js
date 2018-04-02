import React, { Component } from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';

import TeamCard from '../components/team/TeamCard.component'

class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Orgas } = this.props.gsheet;
        return (
            <div>
                <h1>Team</h1>
                {Orgas.map((member, i) => (
                    <TeamCard key={`member_${i}`} member={member} />
                ))}
            </div>
        );
    }
}

Team.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(Team)