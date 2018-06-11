import React, { Component } from "react";
import PropTypes from "prop-types";

class TicketingAccess extends Component {
  constructor() {
    super();
  }

  render() {
    const { registrationIsOpened } = this.props;
    return (
      <section className="row ticketingAccess">
        <div className="ticketingAccess-ticketingAccessFlottant">
          <img src="img/svg/theme1_flottant.svg" />
        </div>
        <div className="columns small-12 text-center">
          <h5 className="sectionTitle">Achetez votre place pour BDX I/O</h5>
          {!registrationIsOpened && (
            <h6 className="sectionSubtitle">
              Ouverture de la billeterie en Juin
            </h6>
          )}
        </div>

        <div className="row collapse align-center ticketingAccess-container">
          <div
            className={
              "column small-10 medium-3 large-3 ticketingAccess-container-item " +
              (!registrationIsOpened ? "disabled" : "")
            }
          >
            <div className="row align-center ticketingAccess-container-item-infos">
              <div className="columns small-12 ticketingAccess-container-item-infos-title">
                <div className="ticketingAccess-container-item-infos-title-euros">
                  32,00 €
                </div>
                <div className="ticketingAccess-container-item-infos-title-classe">
                  Early Bird
                </div>
              </div>
              <div className="columns small-12 ticketingAccess-container-item-infos-status">
                Individuel
              </div>
            </div>
            <div className="row ticketingAccess-container-item-content">
              <div>
                Accès a partir de 8H30 au <span>petit déjeuner</span>
              </div>
              <div>
                Repas <span>offert</span> le midi
              </div>
              <div>Accès aux stands</div>
              <div>
                Accès à <span>toutes</span> les conférences
              </div>
            </div>
            <div className="row shrink align-center">
              {registrationIsOpened ? (
                <button
                  className="button small secondary"
                  onClick={() => {
                    window.open(
                      "https://www.weezevent.com/widget_billeterie.php?id_evenement=343515&lg_billetterie=1&code=29341&width_auto=1&color_primary=00AEEF",
                      "Billetterie_weezevent",
                      "width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no"
                    );
                  }}
                >
                  Acheter
                </button>
              ) : (
                <span className="button small secondary disabled">
                  Pas encore disponible
                </span>
              )}
            </div>
          </div>

          <div
            className={
              "column small-10 medium-3 large-3 ticketingAccess-container-item " +
              (!registrationIsOpened ? "disabled" : "")
            }
          >
            <div className="row align-center ticketingAccess-container-item-infos">
              <div className="columns small-12 ticketingAccess-container-item-infos-title">
                <div className="ticketingAccess-container-item-infos-title-euros">
                  64,00 €
                </div>
                <div className="ticketingAccess-container-item-infos-title-classe">
                  Golden Ticket
                </div>
              </div>
              <div className="columns small-12 ticketingAccess-container-item-infos-status">
                Individuel
              </div>
            </div>
            <div className="row ticketingAccess-container-item-content">
              <div>
                Donnez votre <span> avis</span> concernant les talks proposés au
                CFP
              </div>
              <div>
                Invitation au <span>diner speaker</span> si vous votez au moins
                pour 80% des talks
              </div>
              <div>
                Accès a partir de 8H30 au <span>petit déjeuner</span>
              </div>
              <div>
                repas <span>offert</span> le midi
              </div>
              <div>Accès aux stands</div>
              <div>
                Accès à <span>toutes</span> les conférences
              </div>
            </div>
            <div className="row shrink align-center">
              {registrationIsOpened ? (
                <button
                  className="button small secondary"
                  onClick={() => {
                    window.open(
                      "https://www.weezevent.com/widget_billeterie.php?id_evenement=343515&lg_billetterie=1&code=29341&width_auto=1&color_primary=00AEEF",
                      "Billetterie_weezevent",
                      "width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no"
                    );
                  }}
                >
                  Acheter
                </button>
              ) : (
                <span className="button small secondary disabled">
                  Pas encore disponible
                </span>
              )}
            </div>
          </div>

          <div
            className={
              "column small-10 medium-3 large-3 ticketingAccess-container-item " +
              (!registrationIsOpened ? "disabled" : "")
            }
          >
            <div className="row align-center ticketingAccess-container-item-infos">
              <div className="columns small-12 ticketingAccess-container-item-infos-title">
                <div className="ticketingAccess-container-item-infos-title-euros">
                  64,00 €
                </div>
                <div className="ticketingAccess-container-item-infos-title-classe">
                  Classic
                </div>
              </div>
              <div className="columns small-12 ticketingAccess-container-item-infos-status">
                Individuel
              </div>
            </div>
            <div className="row ticketingAccess-container-item-content">
              <div>
                Accès a partir de 8H30 au <span>petit déjeuner</span>
              </div>
              <div>
                Repas <span>offert</span> le midi
              </div>
              <div>Accès aux stands</div>
              <div>
                Accès à <span>toutes</span> les conférences
              </div>
              <div>Soutenez l'événement</div>
            </div>
            <div className="row shrink ticketingAccess-container-item-content-button align-center">
              {registrationIsOpened ? (
                <button
                  className="button small secondary"
                  onClick={() => {
                    window.open(
                      "https://www.weezevent.com/widget_billeterie.php?id_evenement=343515&lg_billetterie=1&code=29341&width_auto=1&color_primary=00AEEF",
                      "Billetterie_weezevent",
                      "width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no"
                    );
                  }}
                >
                  Acheter
                </button>
              ) : (
                <span className="button small secondary disabled">
                  Pas encore disponible
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TicketingAccess.propTypes = {
  registrationIsOpened: PropTypes.bool.isRequired
};

export default TicketingAccess;
