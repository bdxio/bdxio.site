import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SomeNews from './SomeNews.component';

const COUNT_DISPLAYED_SPEAKERS = 4;

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.getRandomSpeaker = this.getRandomSpeaker.bind(this);
        this.getRandomSpeakers = this.getRandomSpeakers.bind(this);
    }

    getRandomSpeaker(ref) {
        const { speakers } = this.props;
        const randomSpeaker = speakers[Math.floor(Math.random() * speakers.length)];
        const isSelected = (ref.findIndex(r => r['Nom'] === randomSpeaker['Nom']) > -1);

        return (isSelected || (randomSpeaker['Nom'] === "")) ? this.getRandomSpeaker(ref) : randomSpeaker;
    }

    getRandomSpeakers() {
        const speakers = [];
        if (this.props.speakers.length > 0) {
            const LIMIT = this.props.speakers.length >= COUNT_DISPLAYED_SPEAKERS ? COUNT_DISPLAYED_SPEAKERS : this.props.speakers.length;
            for (let i = 0; i < LIMIT; i++) {
                speakers.push(this.getRandomSpeaker(speakers));
            }
        }
        return speakers;
    }

    render() {
        const randomSpeakers = this.getRandomSpeakers();
        console.log(randomSpeakers)
        return (
            <div className="row speakers text-center">
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6 className="sectionSubTitle">On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row align-center speakers-container-content">
                        {randomSpeakers.slice(0, 2).map((speaker, i) => {
                            return (<div className="column small-4 align-center speakers-container-content-item" key={`'speaker_${i}`}>
                                <div className="column auto align-center speakers-container-content-item-picture">
                                    <img src={speaker['Avatar url']} />
                                </div>
                                <div className="column auto align-center speakers-container-content-item-text">
                                    <h6>{speaker['Prénom']} {speaker['Nom']}</h6>
                                    <div className="speakers-container-content-item-text-bio">{speaker['Bio'].substring(0,150)}...</div>
                                    <div>
                                        <hr />
                                        {speaker['Twitter'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-twitter"></i></span>
                                        }
                                        {speaker['Linkedin'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-linkedin"></i></span>
                                        }
                                        {speaker['Google+'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-google-plus"></i></span>
                                        }
                                        {speaker['Blog'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-globe"></i></span>
                                        }
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row align-center speakers-container-content">
                        {randomSpeakers.slice(-2).map((speaker, i) => {
                            return (<div className="column small-4 align-center speakers-container-content-item" key={`'speaker_${i}`}>
                                <div className="column auto align-center speakers-container-content-item-text">
                                    <h6>{speaker['Prénom']} {speaker['Nom']}</h6>
                                    <div className="speakers-container-content-item-text-bio">{speaker['Bio'].substring(0,150)}...</div>
                                    <div>
                                        <hr />
                                        {speaker['Twitter'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-twitter"></i></span>
                                        }
                                        {speaker['Linkedin'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-linkedin"></i></span>
                                        }
                                        {speaker['Google+'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-google-plus"></i></span>
                                        }
                                        {speaker['Blog'] &&
                                            <span><i className="speakers-container-content-item-text-socialNetwork fa fa-globe"></i></span>
                                        }
                                    </div>
                                </div>
                                <img className="column auto align-center speakers-container-content-item-picture"
                                    src={speaker['Avatar url']} />
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="column align-center speakers-button">
                    <Link className="columns shrink text-center button small secondary" to={"/speakers"}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

SomeSpeakersPresentation.propTypes = {
    speakers: PropTypes.array.isRequired,
}

export default SomeSpeakersPresentation