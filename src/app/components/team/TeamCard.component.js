import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div className="column small-4 align-center speakers-container-content-item">
                <img className="column auto align-center speakers-container-content-item-picture"
                    src={member['Avatar url']} alt={member['Nom']} />

                <div className="column auto align-center speakers-container-content-item-text">
                    <h6>{member['Prénom']} {member['Nom']}</h6>
                    <div className="speakers-container-content-item-text-bio">{member['Bio']}</div>
                    <div>
                        <hr />
                        {member['Twitter'] &&
                            <span><a href={`https://twitter.com/${member['Twitter']}`}><i className="speakers-container-content-item-text-socialNetwork fa fa-twitter"></i></a></span>
                        }
                        {member['Linkedin'] &&
                            <span><a href={member['Linkedin']}><i className="speakers-container-content-item-text-socialNetwork fa fa-linkedin"></i></a></span>
                        }
                        {member['Google+'] &&
                            <span><a href={member['Google+']}><i className="speakers-container-content-item-text-socialNetwork fa fa-google-plus"></i></a></span>
                        }
                        {member['Blog'] &&
                            <span><a href={member['Blog']}><i className="speakers-container-content-item-text-socialNetwork fa fa-globe"></i></a></span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

TeamCard.propTypes = {
    member: PropTypes.object.isRequired,
};

export default TeamCard;