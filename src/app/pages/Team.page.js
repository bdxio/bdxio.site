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
            <div className="row team text-center">
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">LA TEAM</h5>
                </div>

                <div className="row">
                    {Orgas.map((member, i) => (
                        <TeamCard key={`member_${i}`} member={member} />
                    ))}
                </div>

                <div className="column small-24 team-container">
                    <div className="row align-center team-container-content">
                        <div className="column small-4 align-center team-container-content-item">
                            <div className="column auto align-center team-container-content-item-picture">
                                <img src="" />
                            </div>
                            <div className="column auto align-center team-container-content-item-text">
                                <h6>PRENON NOM</h6>
                                <div className="team-container-content-item-text-bio">BIO</div>
                            </div>
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