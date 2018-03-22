import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConferenceThemes extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="columns text-center">
                    <h5 className="sectionTitle">Les thèmes de la conférence</h5>
                    <h6>nedjdejdej denjdek</h6>
                </div>

                <div>
                    <div>
                        <div>
                            <h4>Design, UI & UX</h4>
                            <div>CSS, Ergonomie & Design.
                                Experience utilisateur.</div>
                        </div>
                        <div>
                            <h4>Backends, Cloud & BigData</h4>
                             <div>Frameworks côté serveur.
                                 Cloud.
                                 Base de données NoSQL.</div>
                        </div>
                        <div>
                            <h4>Frontend Web, Mobile et VideoGames</h4>
                             <div>Frameworks côté client.
                                 Application web / mobiles (hybrides, natives) / progressives.
                                 Outillage pour les jeux vidéos.</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Tooling</h4>
                             <div>Outillage pour la productivité.
                                 Outillage pour le build.
                                 IDE.</div>
                        </div>
                        <div>
                            <h4>Internet des objets & marchés émergents</h4>
                             <div>A la recherche des idées disruptives au service du monde de demain.</div>
                        </div>
                        <div>
                            <h4>Conception, Architecture & Pratiques de dev</h4>
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