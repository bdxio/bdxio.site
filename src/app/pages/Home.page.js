import React, { Component }     from 'react';
import displayPage              from './_PageContainer';
import Countdown                from '../components/Countdown.component';
import MetricsBar               from '../components/MetricsBar.component';
import Link                     from 'react-router-dom/es/Link';
import ConferenceThemes         from '../components/ConferenceThemes.component';
import SomeSpeakersPresentation from '../components/SomeSpeakersPresentation.component';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Bienvenue à BDX I/O 2018 !</h1>
                <div>
                    <span>10 novembre</span>
                    <span>EINSERB</span>
                </div>

                <Countdown/>

                <div>
                    <button type="button">S'inscrire</button>
                    <button type="button">Programme</button>
                </div>

                <div>
                    <h4>A propos</h4>
                    <h6>
                        BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes <br/>
                        Pour cette nouvelle edition, nous recevrons encore 500 personnes passionées pour une journée stimulante et de bonne
                        humeur
                    </h6>
                </div>

                <MetricsBar/>

                <Link to="/gallery">Voir la galerie</Link>

                <ConferenceThemes/>

                <div>Image de l'équipe avec un message sympa !!!</div>

                <SomeSpeakersPresentation/>


            </div>
        );
    }
}

export default displayPage( Home )