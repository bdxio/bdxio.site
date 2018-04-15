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
                <Header title="LA TEAM"/>
                <div className="row auto align-center team">
                    <div className="column small-12">
                        <h4>/ LE BUREAU</h4>
                        {/* TODO fix class "team-open" like in component speakers for see all the content of the person */} 
                        <div className="row team-row-1 team-content">
                            {Orgas.map((member, i) => (
                                <TeamCard key={`member_${i}`} member={member} />
                            ))}
                        </div>
                    </div>

                    <div className="column small-12 team">
                        <h4>/ LES AUTRES MEMBRES</h4>
                        {/* TODO fix class "team-open" like in component speakers for see all the content of the person */} 
                        <div className="row team-row-2 team-content">
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