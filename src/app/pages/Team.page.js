import React, { Component } from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

import TeamCard from '../components/team/TeamCard.component'

class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Orgas } = this.props.gsheet;
        return (
            <div>
                <Header title="LA TEAM" />
                <div className="row auto align-center">
                    <div className="column small-10">
                        <div className="row">
                            {Orgas.map((member, i) => (
                                <TeamCard key={`member_${i}`} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Team.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(Team)