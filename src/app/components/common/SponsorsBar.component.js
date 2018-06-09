import React, { Component } from "react";
import PropTypes from "prop-types";

class SponsorsBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { partners } = this.props;
    return (
      <section className="row sponsorBar">
        <img className="homeFlottant" src="img/svg/sponsor_flottant.svg" />
        <div className="columns shrink text-center">
          <h5 className="title">Nos sponsors Impériaux</h5>
        </div>
        <div className="row">
          <div className="columns auto text-center">
            {partners
              .filter((p, i) => i === 0)
              .map((p, i) => (
                <img
                  key={`sb_${i}`}
                  src={p["Logo url"]}
                  alt={p["Société"]}
                  width={p["Hauteur logo"] || 150}
                />
              ))}
          </div>
        </div>
        <div className="row">
          <div className="columns auto text-center">
            {partners
              .filter((p, i) => i > 0 && i <= 5)
              .map((p, i) => (
                <img
                  key={`sb_${i}`}
                  src={p["Logo url"]}
                  alt={p["Société"]}
                  width={p["Hauteur logo"] || 150}
                />
              ))}
          </div>
        </div>
        <div className="row">
          <div className="columns auto text-center">
            {partners
              .filter((p, i) => i > 5)
              .map((p, i) => (
                <img
                  key={`sb_${i}`}
                  src={p["Logo url"]}
                  alt={p["Société"]}
                  width={p["Hauteur logo"] || 150}
                />
              ))}
          </div>
        </div>
        <img className="homeFlottant1" src="img/svg/footer_flottant.svg" />
      </section>
    );
  }
}

SponsorsBar.propTypes = {
  partners: PropTypes.array.isRequired
};

export default SponsorsBar;
