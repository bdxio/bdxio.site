import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div className="column small-4 align-center team-content-item">
                <img className="column auto align-center team-content-item-picture"
                    src={member['Avatar url']} alt={member['Nom']} />
                <div className="column auto text-center team-content-item-text">
                    <h6>{member['Prénom']} {member['Nom']}</h6>
                    <div className="team-content-item-text-bio">{member['Bio']}</div>
                    <div>
                        <hr />
                        {member['Twitter'] &&
                            <span><a href={`https://twitter.com/${member['Twitter']}`} target="_blank"><i className="team-content-item-text-socialNetwork fa fa-twitter"></i></a></span>
                        }
                        {member['Linkedin'] &&
                            <span><a href={member['Linkedin']} target="_blank"><i className="team-content-item-text-socialNetwork fa fa-linkedin"></i></a></span>
                        }
                        {member['Google+'] &&
                            <span><a href={member['Google+']} target="_blank"><i className="team-content-item-text-socialNetwork fa fa-google-plus"></i></a></span>
                        }
                        {member['Blog'] &&
                            <span><a href={member['Blog']} target="_blank"><i className="team-content-item-text-socialNetwork fa fa-globe"></i></a></span>
                        }
                    </div>
                </div>
                <span className="team-content-item-arrow"></span>
            </div>
        )
    }
}

TeamCard.propTypes = {
    member: PropTypes.object.isRequired,
};

export default TeamCard;