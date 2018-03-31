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

                    <div className="row small-4 speakers-container">
                        <div className="column speakers-container-content">
                            <div>photo</div>
                            <div className="column speakers-container-content">
                                <div>text</div>
                            </div>
                            <div>
                                <div>photo</div>
                                <div>text</div>
                            </div>
                            <div>
                                <div>text</div>
                                <div>photo</div>
                            </div>
                            <div>
                                <div>text</div>
                                <div>photo</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column align-center">
                        <Link className="columns shrink text-center button small secondary" to={"/speakers"}>Les voir tous</Link>
                    </div>
            </div>
        );
    }
}

export default SomeSpeakersPresentation