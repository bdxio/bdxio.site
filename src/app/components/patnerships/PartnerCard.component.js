import React, { Component } from "react";
import PropTypes from "prop-types";

class PartnerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { imageAtRight, partner } = this.props;
    return (
      <div className="columns auto partner-card">
        <div className="text-center">
          <a href={partner["Site"]} title={partner["Société"]} target="_blank">
            <img
              src={partner["Logo url"]}
              alt={partner["Société"]}
              width={partner["Hauteur logo"] || 150}
            />
          </a>
        </div>
      </div>
    );
  }
}

PartnerCard.propTypes = {
  partner: PropTypes.object.isRequired
};

export default PartnerCard;
