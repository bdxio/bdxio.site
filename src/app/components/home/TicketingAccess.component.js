import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TicketingAccess extends Component {
    constructor() {
        super();
    }

    render() {
        const {registrationIsOpened} = this.props;
        return (
            <section className="row ticketingAccess">
                <div className="ticketingAccess-ticketingAccessFlottant">
                    <img src="img/svg/theme1_flottant.svg"/>
                </div>
                <div className="columns small-12 text-center">
                    <h5 className="sectionTitle">Achetez votre place</h5>
                    <h6 className="sectionSubtitle">Les prix restent inchangés pour cette édition.</h6>
                </div>

                <div className="row collapse align-center ticketingAccess-container">
                    <div
                        className={"column small-10 large-3 ticketingAccess-container-item " + (!registrationIsOpened ? 'disabled' : '')}>
                        <div className="row align-center ticketingAccess-container-item-infos">
                            <div className="columns small-12 ticketingAccess-container-item-infos-title">
                                <div className="ticketingAccess-container-item-infos-title-euros">32,00 €</div>
                                <div className="ticketingAccess-container-item-infos-title-classe">Early
                                    Bird
                                </div>
                            </div>
                            <div className="columns small-12 ticketingAccess-container-item-infos-status">
                                Individuel
                            </div>
                        </div>
                        <div
                            className="row ticketingAccess-container-item-content">
                            <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                            <div>Repas <span>offert</span> le midi</div>
                            <div>Accès aux stands</div>
                            <div>Accès à <span>toutes</span> les conférences</div>
                        </div>
                        <div className="row shrink align-center">
                            {registrationIsOpened ?
                                <a className="button small secondary">Acheter</a>
                                :
                                <span className="button small secondary disabled">Pas encore disponible</span>
                            }
                        </div>
                    </div>

                    <div
                        className={"column small-10 large-3 ticketingAccess-container-item " + (!registrationIsOpened ? 'disabled' : '')}>
                        <div className="row align-center ticketingAccess-container-item-infos">
                            <div className="columns small-12 ticketingAccess-container-item-infos-title">
                                <div className="ticketingAccess-container-item-infos-title-euros">64,00 €</div>
                                <div
                                    className="ticketingAccess-container-item-infos-title-classe">Golden
                                    Ticket
                                </div>
                            </div>
                            <div className="columns small-12 ticketingAccess-container-item-infos-status">
                                Individuel
                            </div>
                        </div>
                        <div
                            className="row ticketingAccess-container-item-content">
                            <div>Donner votre <span>avis</span> concernant les talks</div>
                            <div>Invitation au <span>diner speaker</span> si vous votez au moins pour 80% des
                                talks
                            </div>
                            <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                            <div>repas <span>offert</span> le midi</div>
                            <div>Accès aux stands</div>
                            <div>Accès à <span>toutes</span> les conférences</div>
                        </div>
                        <div className="row shrink align-center">
                            {registrationIsOpened ?
                                <a className="button small secondary">Acheter</a>
                                :
                                <span className="button small secondary disabled">Pas encore disponible</span>
                            }
                        </div>
                    </div>

                    <div
                        className={"column small-10 large-3 ticketingAccess-container-item " + (!registrationIsOpened ? 'disabled' : '')}>
                        <div className="row align-center ticketingAccess-container-item-infos">
                            <div className="columns small-12 ticketingAccess-container-item-infos-title">
                                <div className="ticketingAccess-container-item-infos-title-euros">64,00 €</div>
                                <div
                                    className="ticketingAccess-container-item-infos-title-classe">Classic
                                </div>
                            </div>
                            <div className="columns small-12 ticketingAccess-container-item-infos-status">
                                Individuel
                            </div>
                        </div>
                        <div
                            className="row ticketingAccess-container-item-content">
                            <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                            <div>Repas <span>offert</span> le midi</div>
                            <div>Accès aux stands</div>
                            <div>Accès à <span>toutes</span> les conférences</div>
                            <div>Soutenez l'événement</div>
                        </div>
                        <div className="row shrink ticketingAccess-container-item-content-button align-center">
                            {registrationIsOpened ?
                                <a className="button small secondary">Acheter</a>
                                :
                                <span className="button small secondary disabled">Pas encore disponible</span>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

TicketingAccess.propTypes = {
    registrationIsOpened: PropTypes.bool.isRequired,
}


export default TicketingAccess