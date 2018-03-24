import React, { Component } from 'react';
import displayPage from './_PageContainer';
import Countdown from '../components/Countdown.component';
import MetricsBar from '../components/MetricsBar.component';
import Link from 'react-router-dom/es/Link';
import ConferenceThemes from '../components/ConferenceThemes.component';
import SomeSpeakersPresentation from '../components/SomeSpeakersPresentation.component';
import SomeNews from '../components/SomeNews.component';
import TicketingAccess from '../components/TicketingAccess.component';


class Home extends Component {

    constructor() {
        super();
    }

    render() {
        const { News } = this.props.gsheet;
        return (
            <div className="home">
                <div className="row home-header">
                    <h1 className="columns text-center">Bienvenue à BDX I/O 2018 !</h1>
                    <div className="home-header-content">
                        <span>10 novembre</span>
                        <span>EINSERB</span>
                    </div>
                </div>

                <Countdown />

                <div>
                    <button type="button">S'inscrire</button>
                    <button type="button">Programme</button>
                </div>

                <div className="row text-center home-about">
                    <h5 className="sectionTitle">À propos de Bdxio</h5>
                    <h6>
                        BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes <br />
                        Pour cette nouvelle edition, nous recevrons encore 500 personnes passionées pour une journée stimulante et de bonne
                        humeur
                    </h6>
                </div>

                <MetricsBar />

                <div className="row align-center">
                    <Link className="columns shrink button small primary" to="/gallery">Voir la galerie</Link>
                </div>

                <i className="fa fa-twitter"></i>

                <ConferenceThemes />

                <div className="row home-team">
                    <div>Image de l'équipe avec un message sympa !!!</div>
                </div>



                <SomeSpeakersPresentation />

                <SomeNews news={News} />

                <TicketingAccess />
            </div >
        );
    }
}

export default displayPage(Home)