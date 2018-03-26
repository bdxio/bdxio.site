import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SomeSpeakersPresentation extends Component {
    constructor() {
        super();
    }
    /* TODO add fetch to get 4 speakers randomly */
    render() {
        return (
            <div className="row speakers">
                <div className="sectionTitle">
                    <div>
                        <h5 className="sectionTitle">Nos speakers</h5>
                        <h6 className="sectionSubTitle">On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                    </div>

                    <div>
                        <div>
                            <div>photo</div>
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
                <Link className="columns text-center button small secondary" to={"/speakers"}>Les voir tous</Link>
            </div>
        );
    }
}

export default SomeSpeakersPresentation