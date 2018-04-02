import React, { Component } from 'react';

class TicketingAccess extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row ticketingAccess">
                <div className="columns text-center">
                    <h5 className="sectionTitle">Achetez votre place</h5>
                    <h6 className="sectionSubtitle">Lorem Upsom</h6>
                </div>

                <div className="columns text-center">
                    <div className="row align-center ticketingAccess-container">
                        <div className="columns small-3 ticketingAccess-container-item">
                            <div className="ticketingAccess-container-item-title">
                                <div className="ticketingAccess-container-item-title-euros">32,00 €</div>
                                <div className="ticketingAccess-container-item-title-classe">Early Bird</div>
                            </div>
                            <div className="ticketingAccess-container-item-status">Individuel</div>
                            <div className="ticketingAccess-container-item-content">
                                <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                                <div>Repas <span>offert</span> le midi</div>
                                <div>Accès aux stands</div>
                                <div>Accès à <span>toutes</span> les conférences</div>
                            </div>
                        </div>

                        <div className="columns small-3 ticketingAccess-container-item">
                            <div className="ticketingAccess-container-item-title">
                                <div className="ticketingAccess-container-item-title-euros">64,00 €</div>
                                <div className="ticketingAccess-container-item-title-classe">Golden Ticket</div>
                            </div>
                            <div className="ticketingAccess-container-item-status">Individuel</div>
                            <div className="ticketingAccess-container-item-content">
                                <div>Donner votre <span>avis</span> concernant les talks</div>
                                <div>Invitation au <span>diner speaker</span> si vous votez au moins pour 80% des talks</div>
                                <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                                <div>repas <span>offert</span> le midi</div>
                                <div>Accès aux stands</div>
                                <div>Accès à <span>toutes</span> les conférences</div>
                            </div>
                        </div>

                        <div className="columns small-3 ticketingAccess-container-item">
                            <div className="ticketingAccess-container-item-title">
                                <div className="ticketingAccess-container-item-title-euros">64,00 €</div>
                                <div className="ticketingAccess-container-item-title-classe">Classic</div>
                            </div>
                            <div className="ticketingAccess-container-item-status">Individuel</div>
                            <div className="ticketingAccess-container-item-content">
                                <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                                <div>Repas <span>offert</span> le midi</div>
                                <div>Accès aux stands</div>
                                <div>Accès à <span>toutes</span> les conférences</div>
                                <div>Soutenez l'événement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TicketingAccess