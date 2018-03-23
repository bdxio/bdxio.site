import React, { Component } from 'react';
import IframeContainer      from '../common/IframeContainer.component';

class Location extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">

                <div className="columns medium-12">
                    <div>A 10 minute de <br/>Bordeaux</div>
                    <div>6 amphis en parallèle <br/>> 50 conférences</div>
                    <div>15 communautés <br/>> 5àà Développeur•se•s</div>
                </div>

                <div className="columns medium-12">
                    <div className="row">
                        <div className="columns medium-6">
                            <h4>ENSEIRB</h4>
                            <div>
                                1 Avenue de docteur Albert Schweitzer <br/>
                                33400 Talence
                            </div>
                            <div>
                                Pour nous rejoindre en transport en commun,<br/>
                                choisisser le Bus ou le Tram
                            </div>
                            <div>
                                Si vous venez en voiture, le parking de l'uiversité est ouvert et gratuit
                            </div>
                        </div>
                        <div className="columns medium-6">
                            <IframeContainer src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv4tyl4HYVA0RLvkdcxUEhOw&key=AIzaSyBQYTDJ5joswWG8lQ-Wv9MGYUqHhD9LfCc"
                                    height="450" width="600" allowFullScreen/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location