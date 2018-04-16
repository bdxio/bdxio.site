import React, { Component } from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';
import UserCard from '../components/common/UserCard.component';


class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Orgas } = this.props.gsheet;
        const office = Orgas.filter(o => o['Bur'] == '1')
        const members = Orgas.filter(o => o['Bur'] != '1')
        return (
            <div>
                <Header title="LA TEAM" />

                <div className="row align-center speakers-container">
                    <div className="column small-12 large-8">
                        <h4>/ LE BUREAU</h4>
                        <div className="row speakers-row-1 speakers-container-content">
                            {office.map((member, i) => (
                                <UserCard key={`member_${i}`} user={member} />
                            ))}
                        </div>
                    </div>


                    <div className="column small-12 large-8">
                        <h4>/ LES MEMBRES</h4>
                        <div className="row speakers-row-2 speakers-container-content">
                            {members.map((member, i) => (
                                <UserCard key={`member_${i}`} user={member} />
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