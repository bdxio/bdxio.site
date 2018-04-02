import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router-dom';
import SomeNews             from './SomeNews.component';

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.get4Speakers = this.get4Speakers.bind(this);
    }

    /* TODO add fetch to get 4 speakers randomly */
    get4Speakers() {
        if (this.props.speakers.length === 0) {return [];}
        const speakers4 = [];
        for(let i = 0; i < 4; i++) {
            speakers4.push(this.props.speakers[Math.floor(Math.random()*this.props.speakers.length)]);
        }
        return speakers4;
    }

    render() {
        return (
            <div className="row speakers text-center">
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6 className="sectionSubTitle">On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row speakers-container-content">
                        {this.get4Speakers().map((speaker, i) => {
                         return ( <div key={`'speaker${i}`}>
                            <img className="column auto align-center speakers-container-content-picture"
                                 src={speaker['Avatar url']} />
                            <div className="column auto align-center speakers-container-content-text">
                                <h4>{speaker['Prénom']} {speaker.Nom}</h4>
                                <h6>{speaker.Bio}</h6>
                                <div>
                                    <span>{speaker.Twitter}</span>
                                    <span>{speaker.Linkedin}</span>
                                    <span>{speaker['Google+']}</span>
                                    <span>{speaker.Blog}</span>
                                </div>
                            </div>
                        </div>
                         )
                        })}
                    </div>
                </div>

                <div className="column align-center">
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