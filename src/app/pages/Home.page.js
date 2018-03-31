import React, { Component } from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';
import Countdown from '../components/Countdown.component';
import MetricsBar from '../components/home/MetricsBar.component';
import Link from 'react-router-dom/es/Link';
import ConferenceThemes from '../components/home/ConferenceThemes.component';
import Quote from '../components/home/Quote.component';
import SomeSpeakersPresentation from '../components/home/SomeSpeakersPresentation.component';
import SomeNews from '../components/home/SomeNews.component';
import TicketingAccess from '../components/home/TicketingAccess.component';
import Location from '../components/home/Location.component';
import SponsorsBar from '../components/common/SponsorsBar.component';


class Home extends Component {

    constructor() {
        super();
    }

    render() {
        const { News, Sponsors } = this.props.gsheet;
        // TODO: FILTER WITH CORRECT NEW NAME
        const IMPERIAL = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === 'GOLD');

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
                    <h5 className="sectionTitle align-center">À propos de Bdxio</h5>
                    <h6>
                        BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes <br />
                        Pour cette cinquième édition, nous recevrons encore 500 passionées pour une journée nouvelle de découverte dans la bonne
                        humeur !!!
                    </h6>
                </div>

                <MetricsBar />

                <div className="row align-center">
                    <Link className="columns shrink button small primary" to="/gallery">Voir la galerie</Link>
                </div>

                <ConferenceThemes />

                <Quote />

                <SomeSpeakersPresentation />

                <SomeNews news={News} />

                <TicketingAccess />

                <Location />

                <SponsorsBar partners={IMPERIAL} />
            </div>
        );
    }
}

Home.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(Home)