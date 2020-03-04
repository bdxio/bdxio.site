import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import { Partner, LevelPartnerEnum } from '@models/partner';

const PartnerElement = (partner: Partner) => (
  <div className="columns auto partner-card">
    <div className="text-center">
      <a href={partner.website} title={partner.name} target="_blank">
        <img src={partner.logo} alt={partner.name} width={150} />
      </a>
    </div>
  </div>
);

const PartnershipsPage = () => {
  return (
    <>
      <SEO title="Sponsors" />
      <Layout>
        <div className="partnership">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">Sponsors</h3>
            </div>
          </div>

          <div className="row align-center users-container">
            <div className="column small-12 text-center">
              <p className="subtitle">
                Les sponsors qui soutiennent l'édition 2020
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
            {Object.entries(LevelPartnerEnum).map((entry: any) => (
              <div
                key={entry[0]}
                className="column small-12 large-8 partnership-wrapper"
              >
                <h4>/ {entry[0]}</h4>
                <div className="partnership-logo">
                  <div className="row">{/* TODO PartnerElement */}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PartnershipsPage;
