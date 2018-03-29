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
import SponsorsBar              from '../components/common/SponsorsBar.component';


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

                <Countdown/>

                <div>
                    <button type="button">S'inscrire</button>
                    <button type="button">Programme</button>
                </div>

                <div className="row text-center home-about">
                    <h5 className="sectionTitle">À propos de Bdxio</h5>
                    <h6>
                        BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes <br />
                        Pour cette cinquième édition, nous recevrons encore 500 passionées pour une journée nouvelle de découverte dans la bonne
                        humeur !!!
                    </h6>
                </div>

                <MetricsBar/>

                <div className="row align-center">
                    <Link className="columns shrink button small primary" to="/gallery">Voir la galerie</Link>
                </div>

                <ConferenceThemes/>

                <div className="row align-middle home-team">
                    <h6 className="columns text-center home-team-content">“Each of us is a unique strand in the intricate web of life and here to make a contribution.” <br/> Deepak Chopra </h6>
                    {/*<h6 className="columns text-center home-team-content">"Le fossé séparant théorie et pratique est moins large en théorie qu’il ne l’est en pratique."</h6>*/}
                    {/*<h6 className="columns text-center home-team-content">"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."<br>Tim Berners-Lee</h6>*/}
                    {/*<h6 className="columns text-center home-team-content">"On the Web we all become small-town visitors lost in the big city."<br>Alison Gopnik</h6>*/}
                    {/*<h6 className="columns text-center home-team-content">"Everyday life is like programming, I guess. If you love something you can put beauty into it."<br>Donald Knuth</h6>*/}

                </div>

                <SomeSpeakersPresentation/>

                <SomeNews news={News}/>

                <TicketingAccess/>

                <Location/>

                <SponsorsBar />
            </div>
        );
    }
}

export default displayPage( Home )