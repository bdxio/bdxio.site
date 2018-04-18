import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import UserCard from '../common/UserCard.component';

const COUNT_DISPLAYED_SPEAKERS = 4;

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speakers: [],
        };
    }

    componentWillMount() {
        const speakers = this.getRandomSpeakers(this.props.speakers);
        this.setState({speakers});
    }

    getRandomSpeaker(ref, speakers) {
        const randomSpeaker = speakers[Math.floor(Math.random() * speakers.length)];
        const isSelected = (ref.findIndex(r => r['Nom'] === randomSpeaker['Nom']) > -1);

        return (isSelected || (randomSpeaker['Nom'] === "")) ? this.getRandomSpeaker(ref, speakers) : randomSpeaker;
    }

    getRandomSpeakers(speakers) {
        const randomSpeakers = [];
        if (speakers.length > 0) {
            const LIMIT = speakers.length >= COUNT_DISPLAYED_SPEAKERS ? COUNT_DISPLAYED_SPEAKERS : speakers.length;
            for (let i = 0; i < LIMIT; i++) {
                const speaker = this.getRandomSpeaker(randomSpeakers, speakers);
                randomSpeakers.push(speaker);
            }
        }
        return randomSpeakers;
    }

    render() {
        const {speakers} = this.state;
        const {isPrevious, isMobile} = this.props;
        return (
            <div className="row users text-center">
                <div className="users-usersFlottant">
                    <img src="img/svg/about_flottant.svg"/>
                </div>
                <div className="column small-12">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6>Quelques profils <strong
                        className="red">{(isPrevious ? 'de l\'édition 2017' : '')} </strong> choisis de façon aléatoire
                        pour vous mettre l'eau à la bouche.</h6>
                </div>

                <div className="row align-center users-container">
                    <div className="column small-12 medium-8">
                        <div className="row align-center users-row-1 users-container-content">
                            {speakers.slice(0, 2).map((speaker, i) => <UserCard key={`speaker_${i}`} user={speaker}/>)}
                        </div>
                    </div>


                    <div className="column small-12 medium-8">
                        <div className="row align-center users-row-1 users-container-content">
                            {speakers.slice(-2).map((speaker, i) => <UserCard key={`speaker_${i}`} user={speaker}
                                                                              imageAtRight={!isMobile}/>)}
                        </div>
                    </div>
                </div>

                <div className="column align-center users-button">
                    <Link className="shrink text-center button small secondary"
                          to={(isPrevious ? "/2017/speakers" : "/speakers")}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

SomeSpeakersPresentation.propTypes = {
    speakers: PropTypes.array.isRequired,
    isPrevious: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

export default SomeSpeakersPresentation