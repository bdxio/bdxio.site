import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SomeSpeakersPresentation extends Component {
    constructor() {
        super();
    }
    /* TODO add fetch to get 4 speakers randomly */
    render() {
        return (
            <div className="row speakers text-center">
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6 className="sectionSubTitle">On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row speakers-container-content">
                        <div className="column auto align-center speakers-container-content-picture"></div>
                        <div className="column auto align-center speakers-container-content-text">text</div>

                        <div className="column auto align-center speakers-container-content-picture"></div>
                        <div className="column auto align-center speakers-container-content-text">text</div>
                    </div>

                    <div className="row small-24 speakers-container-content">
                        <div className="column auto align-center speakers-container-content-text">text</div>
                        <div className="column auto align-center speakers-container-content-picture">photo</div>

                        <div className="column auto align-center speakers-container-content-text">text</div>
                        <div className="column auto align-center speakers-container-content-picture">photo</div>
                    </div>
                </div>
                <div className="column align-center">
                    <Link className="columns shrink text-center button small secondary" to={"/speakers"}>Les voir tous</Link>
                </div>
            </div >
        );
    }
}

export default SomeSpeakersPresentation