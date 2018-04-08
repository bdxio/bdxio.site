import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SponsorsBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { partners } = this.props;
        return (
            <div className="row sponsorBar">
             <img className="homeFlottant" src="img/svg/sponsor_flottant.svg" />
                <div className="columns text-center">
                    <h5 className="sectionTitle">Nos sponsors Impériaux</h5>
                    <h6>Merci à nos sponsors pour leur soutient !!! \( ^  ^)°/</h6>
                </div>

                <div className="columns auto text-center">
                    {partners.map((p, i) => (
                        <img className="columns small-3" key={`sb_${i}`} src={p['Logo url']} alt={p['Société']} width="100" />
                    ))}
                </div>
                <img className="homeFlottant1" src="img/svg/footer_flottant.svg" />
            </div>
        );
    }
}

SponsorsBar.propTypes = {
    partners: PropTypes.array.isRequired,
}

export default SponsorsBar