import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SomeNews from './SomeNews.component';
import UserCard from '../common/UserCard.component';

const COUNT_DISPLAYED_SPEAKERS = 4;

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speakers: [],
        }
        this.expandSpeaker = this.expandSpeaker.bind(this);
    }

    componentWillMount() {
        this.getRandomSpeakers(this.props.speakers)
            .then(speakers => this.setState({ speakers }));
    }

    expandSpeaker(speaker) {
        const { speakers } = this.state;
        const idx = speakers.findIndex(s => s['Nom'] === speaker['Nom']);
        if (idx > -1) {
            speakers[idx].expanded = !speakers[idx].expanded;
            this.setState({ speakers: [...speakers] });
        }
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
        const { isPrevious } = this.props;
        return (
            <div className="row users text-center">
                <div className="users-usersFlottant">
                    <img src="img/svg/about_flottant.svg" />
                </div>
                <div className="column small-24">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6>Quelques profils {(isPrevious ? 'de l\'édition 2017' : '')} choisis de façon aléatoire pour vous mettre l'eau à la bouche</h6>
                </div>

                <div className="row align-center users-container">
                    <div className="column small-8">
                        <div className="row align-center users-row-1 users-container-content">
                            {speakers.slice(0, 2).map((speaker, i) => <UserCard key={`speaker_${i}`} user={speaker} />)}
                        </div>
                    </div>


                    <div className="column small-8">
                        <div className="row align-center users-row-1 users-container-content">
                            {speakers.slice(-2).map((speaker, i) => <UserCard key={`speaker_${i}`} user={speaker} imageAtRight />)}
                        </div>
                    </div>
                </div>

                <div className="column align-center users-button">
                    <Link className="columns shrink text-center button small secondary" to={(isPrevious ? "/2017/speakers" : "/speakers")}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

SomeSpeakersPresentation.propTypes = {
    speakers: PropTypes.array.isRequired,
    isPrevious: PropTypes.bool.isRequired,
}

export default SomeSpeakersPresentation