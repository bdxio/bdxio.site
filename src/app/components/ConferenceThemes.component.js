import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConferenceThemes extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row conference">
                <div className="columns text-center conference-themes">
                    <h5 className="sectionTitle">Les thèmes de la conférence</h5>
                    <h6>nedjdejdej denjdek</h6>
                </div>

                <div className="columns conference-container">
                    <div className="row auto text-center align-middle conference-container-content">
                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Design, UI & UX</h6>
                            <div>CSS, Ergonomie & Design.
                                Experience utilisateur.</div>
                        </div>

                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Backends, Cloud & BigData</h6>
                            <div>Frameworks côté serveur.
                                Cloud.
                                 Base de données NoSQL.</div>
                        </div>


                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Frontend Web, Mobile et VideoGames</h6>
                            <div>Frameworks côté client.
                                Application web / mobiles (hybrides, natives) / progressives.
                                 Outillage pour les jeux vidéos.</div>
                        </div>
                    </div>



                    <div className="row align-middle text-center text-middle conference-container-content">
                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Tooling</h6>
                            <div>Outillage pour la productivité.
                                Outillage pour le build.
                                 IDE.</div>
                        </div>
                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Internet des objets & marchés émergents</h6>
                            <div>A la recherche des idées disruptives au service du monde de demain.</div>
                        </div>
                        <div className="columns small-4 conference-container-content-item">
                            <div>I</div>
                            <h6>Conception, Architecture & Pratiques de dev</h6>
                            <div>Méthodologie comme SCRUM ou Kanban.
                                 Principes d'architecture.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConferenceThemes