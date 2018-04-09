import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SomeNews from './SomeNews.component';

const COUNT_DISPLAYED_SPEAKERS = 4;

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speakers: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getRandomSpeakers(nextProps.speakers)
            .then(speakers => this.setState({ speakers }));
    }

    getImageSize(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ width: img.width, height: img.height });
            img.onerror = () => resolve({ width: 0, height: 0 });
            img.src = url;
        })
    }

    getRandomSpeaker(ref, speakers) {
        const randomSpeaker = speakers[Math.floor(Math.random() * speakers.length)];
        const isSelected = (ref.findIndex(r => r['Nom'] === randomSpeaker['Nom']) > -1);

        return (isSelected || (randomSpeaker['Nom'] === "")) ? this.getRandomSpeaker(ref, speakers) : randomSpeaker;
    }

    async getRandomSpeakers(speakers) {
        const randomSpeakers = [];
        if (speakers.length > 0) {
            const LIMIT = speakers.length >= COUNT_DISPLAYED_SPEAKERS ? COUNT_DISPLAYED_SPEAKERS : speakers.length;
            for (let i = 0; i < LIMIT; i++) {
                const speaker = this.getRandomSpeaker(randomSpeakers, speakers);
                const size = await this.getImageSize(speaker['Avatar url']);
                speaker['Avatar url'] = (size.width < 150 || size.height < 150) ? '/img/svg/bdxio_no_speaker.svg' : speaker['Avatar url'];
                randomSpeakers.push(speaker);
            }
        }
        return randomSpeakers;
    }

    render() {
        const { speakers } = this.state;
        return (
            <div className="row speakers text-center">
            <img className="homeFlottant" src="img/svg/speakers_flottant.svg" />
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6 className="sectionSubTitle">On vous a choisi quelques profils <strong className="red">2017</strong> de façon aléatoire pour vous mettre l'eau à la bouche</h6>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row align-center speakers-container-content">
                        {speakers.slice(0, 2).map((speaker, i) => {
                            return (<div className="column small-4 align-center speakers-container-content-item" key={`'speaker_${i}`}>
                                <div className="column auto align-center speakers-container-content-item-picture">
                                    <img src={speaker['Avatar url']} />
                                </div>
                                <div className="column auto align-center speakers-container-content-item-text">
                                    <h6>{speaker['Prénom']} {speaker['Nom']}</h6>
                                    <div className="speakers-container-content-item-text-bio">{speaker['Bio'].substring(0, 150)}...</div>
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
                        {speakers.slice(-2).map((speaker, i) => {
                            return (<div className="column small-4 align-center speakers-container-content-item" key={`'speaker_${i}`}>
                                <div className="column auto align-center speakers-container-content-item-text">
                                    <h6>{speaker['Prénom']} {speaker['Nom']}</h6>
                                    <div className="speakers-container-content-item-text-bio">{speaker['Bio'].substring(0, 150)}...</div>
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