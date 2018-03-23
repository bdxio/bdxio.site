import React, { Component }     from 'react';
import displayPage              from './_PageContainer';
import Countdown                from '../components/Countdown.component';
import MetricsBar               from '../components/home/MetricsBar.component';
import Link                     from 'react-router-dom/es/Link';
import ConferenceThemes         from '../components/home/ConferenceThemes.component';
import SomeSpeakersPresentation from '../components/home/SomeSpeakersPresentation.component';
import SomeNews                 from '../components/home/SomeNews.component';
import TicketingAccess          from '../components/home/TicketingAccess.component';
import Location                 from '../components/home/Location.component';


class Home extends Component {

    constructor() {
        super();
    }

    render() {
        const { News } = this.props.gsheet;
        return (
            <div className="row home">
                <div className="columns home-header">
                    <h1>Bienvenue à BDX I/O 2018 !</h1>
                    <div>
                        <span>10 novembre</span>
                        <span>EINSERB</span>
                    </div>
                </div>

                <Countdown/>

                <div>
                    <button type="button">S'inscrire</button>
                    <button type="button">Programme</button>
                </div>

                <div className="columns">
                    <div className="row">
                        <h5 className="columns shrink text-center sectionTitle">À propos de Bdxio</h5>
                        <h6 className="columns auto text-center">
                            BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes <br/>
                            Pour cette nouvelle edition, nous recevrons encore 500 personnes passionées pour une journée stimulante et de
                            bonne
                            humeur
                        </h6>
                    </div>
                </div>

                <MetricsBar/>

                <div className="row text-center">
                    <Link className="columns button small primary" to="/gallery">Voir la galerie</Link>
                </div>

                <ConferenceThemes/>

                <div>Image de l'équipe avec un message sympa !!!</div>

                <SomeSpeakersPresentation/>

                <SomeNews news={News}/>

                <TicketingAccess/>

                <Location/>
            </div>
        );
    }
}

export default displayPage( Home )