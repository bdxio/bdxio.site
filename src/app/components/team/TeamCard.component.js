import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div className="column small-4">
                <div className="row align-center team-row-1 team-container-content">
                 {/*  TODO added TEAM-OPEN class for see all the bio of the member, like speakers*/}
                    <div className="column text-center team-container-content-item">
                        <img className="column auto align-center team-container-content-item-picture"
                            src={member['Avatar url']} alt={member['Nom']} />
                        <div className="column auto text-center team-container-content-item-text">
                            <h6>{member['Prénom']} {member['Nom']}</h6>
                            <div className="team-container-content-item-text-bio">{member['Bio']}</div>
                            <div>
                                <hr />
                                {member['Twitter'] &&
                                    <span><a href={`https://twitter.com/${member['Twitter']}`} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-twitter"></i></a></span>
                                }
                                {member['Linkedin'] &&
                                    <span><a href={member['Linkedin']} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-linkedin"></i></a></span>
                                }
                                {member['Google+'] &&
                                    <span><a href={member['Google+']} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-google-plus"></i></a></span>
                                }
                                {member['Blog'] &&
                                    <span><a href={member['Blog']} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-globe"></i></a></span>
                                }
                            </div>
                        </div>
                        <span className="team-container-content-item-arrow"></span>
                    </div>
                </div>

                <div className="row align-center team-row-2 team-container-content">
                {/*  TODO added TEAM-OPEN class for see all the bio of the member, like speakers*/}
                    <div className="column text-center team-container-content-item">
                        <div className="column auto text-center team-container-content-item-text">
                            <h6>{member['Prénom']} {member['Nom']}</h6>
                            <div className="team-container-content-item-text-bio">{member['Bio']}</div>
                            <div>
                                <hr />
                                {member['Twitter'] &&
                                    <span><a href={`https://twitter.com/${member['Twitter']}`} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-twitter"></i></a></span>
                                }
                                {member['Linkedin'] &&
                                    <span><a href={member['Linkedin']} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-linkedin"></i></a></span>
                                }
                                {member['Google+'] &&
                                    <span><a href={member['Google+']} target="_blank"><i className="team-container-content-item-text-socialNetwork fa fa-google-plus"></i></a></span>
                                }
                                {member['Blog'] &&
                                    <span><a href={member['Blog']} target="_blank"><i className="team--container-content-item-text-socialNetwork fa fa-globe"></i></a></span>
                                }
                            </div>
                        </div>
                        <img className="column auto align-center team-container-content-item-picture"
                            src={member['Avatar url']} alt={member['Nom']} />
                        <span className="team-container-content-item-arrow"></span>
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