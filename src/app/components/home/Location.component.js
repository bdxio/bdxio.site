import React, { Component } from 'react';
import IframeContainer from '../common/IframeContainer.component';

class Location extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row location">
                <div className="columns small-12 align-center location-infos">
                    <div className="small-3 location-infos-place">A 10 minute de <br />Bordeaux</div>
                    <div className="small-3 location-infos-amphis">6 amphis en parallèle <br />> 50 conférences</div>
                    <div className="small-3 location-infos-dev">15 communautés <br />> 500 Développeur(se)s</div>
                </div>

                <div className="columns small-12 location-site">
                    <div className="row">
                        <div className="columns shrink location-site-place">
                            <h4>ENSEIRB</h4>
                            <div>
                                1 Avenue de docteur Albert Schweitzer <br />
                                33400 Talence
                            </div>
                            <br />
                            <div>
                                Pour nous rejoindre en transport en commun,<br />
                                choisisser le Bus ou le Tram
                            </div>
                            <br />
                            <div>
                                Si vous venez en voiture, le parking de l'uiversité est ouvert et gratuit
                            </div>
                        </div>

                         <div className="columns location-site-map">
                            <IframeContainer src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv4tyl4HYVA0RLvkdcxUEhOw&key=AIzaSyBQYTDJ5joswWG8lQ-Wv9MGYUqHhD9LfCc"
                                height="220" width="820" allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location