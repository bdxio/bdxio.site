import React, { Component } from "react";
import PropTypes from "prop-types";
import displayPage from "./_PageContainer";
import Header from "../components/common/Header.component";
import PartnerCard from "../components/patnerships/PartnerCard.component";

import { Constants } from "../constants";

class Partnerships extends Component {
  constructor() {
    super();
  }

  render() {
    const { Sponsors } = this.props.gsheet;
    const sponsorsEnabled = Sponsors.filter(s => s["Actif"] === "1");

    const IMPERIAL = Sponsors.filter(
      s =>
        s["Actif"] === "1" &&
        s["Type"].toUpperCase() === Constants.sponsors.types.IMPERIAL
    );
    const MAGNUM = Sponsors.filter(
      s =>
        s["Actif"] === "1" &&
        s["Type"].toUpperCase() === Constants.sponsors.types.MAGNUM
    );
    const CHOPINE = Sponsors.filter(
      s =>
        s["Actif"] === "1" &&
        s["Type"].toUpperCase() === Constants.sponsors.types.CHOPINE
    );

    return (
      <div className="partnership">
        <Header title="SPONSORS" />
        <div className="row align-center users-container">
          <div className="column small-12 text-center">
            <p className="subtitle">
              Les sponsors qui nous soutiennent pour cette édition 2018, merci à
              eux !
            </p>
          </div>
          <div className="column small-12 text-center">
            <a
              href="/static/plaquette.pdf"
              target="_blank"
              className="button small primary"
            >
              Devenir sponsors
            </a>
          </div>

          <div className="column small-12 large-8">
            <h4>/ IMPÉRIAUX</h4>
            <div className="row">
              {IMPERIAL.filter((s, i) => i === 0).map((sponsor, i) => (
                <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
              ))}
            </div>
            <div className="row">
              {IMPERIAL.filter((s, i) => i > 0 && i < 5).map((sponsor, i) => (
                <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
              ))}
            </div>
            <div className="row">
              {IMPERIAL.filter((s, i) => i >= 5).map((sponsor, i) => (
                <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
              ))}
            </div>
          </div>

          {MAGNUM.length > 0 && (
            <div className="column small-12 large-8">
              <h4>/ MAGNUM</h4>
              <div className="row">
                {MAGNUM.map((sponsor, i) => (
                  <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
                ))}
              </div>
            </div>
          )}

          {CHOPINE.length > 0 && (
            <div className="column small-12 large-8">
              <h4>/ CHOPINE</h4>
              <div className="row">
                {CHOPINE.map((sponsor, i) => (
                  <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
                ))}
              </div>
            </div>
          )}
        </div>
        {this.props.children}
      </div>
    );
  }
}

Partnerships.propTypes = {
  gsheet: PropTypes.object.isRequired
};

export default displayPage(Partnerships);
