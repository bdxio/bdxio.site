import React, { Component } from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';
import PartnerCard from '../components/patnerships/PartnerCard.component';

import Constant from '../constants';

class Partnerships extends Component {
    constructor() {
        super();
    }

    render() {
        const { Sponsors } = this.props.gsheet;
        const sponsorsEnabled = Sponsors.filter((s) => s['Actif'] === '1');

        const IMPERIAL = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constant.sponsors.types.IMPERIAL);
        const MAGNUM = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constant.sponsors.types.MAGNUM);
        const CHOPINE = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constant.sponsors.types.CHOPINE);

        return (
            <div>
                <h1>Partnerships</h1>
                <h2>IMPERIAL</h2>
                {IMPERIAL.map((sponsor, i) => (
                    <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
                ))}
                <h2>MAGNUM</h2>
                {MAGNUM.map((sponsor, i) => (
                    <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
                ))}
                <h2>CHOPINE</h2>
                {CHOPINE.map((sponsor, i) => (
                    <PartnerCard key={`sponsor_${i}`} partner={sponsor} />
                ))}
            </div>
        );
    }
}

Partnerships.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(Partnerships)