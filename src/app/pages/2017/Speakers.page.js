import React, { Component } from 'react';
import Header from '../../components/common/Header.component';
import displayPage from '../_PageContainer';
import UserCard from '../../components/common/UserCard.component';

class Speakers extends Component {
    constructor() {
        super();
    }

    render() {
        const { Speakers17 } = this.props.gsheet;
        let line = 0;
        return (
            <div>
                <Header title="SPEAKERS 2017" />
                <div className="row align-center users-container">
                    <div className="column small-12 large-8">
                        <div className="row users-container-content">
                            {Speakers17.map((member, i) => {
                                if (i % 2 === 0) line++
                                return <UserCard key={`member_${i}`} user={member} imageAtRight={(line % 2 === 0)} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default displayPage(Speakers)