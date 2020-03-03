import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';

const PartnershipsPage = () => {
  return (
    <>
      <SEO title="Home" />
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

            <div className="column small-12 large-8 partnership-wrapper">
              <h4>/ BALTHAZAR</h4>
              <div className="partnership-logo">
                <div className="row">{/* TODO */}</div>
              </div>
            </div>

            <div className="column small-12 large-8 partnership-wrapper">
              <h4>/ IMPÉRIAUX</h4>
              <div className="partnership-logo">
                <div className="row">{/* TODO 5 by row */}</div>
              </div>
            </div>

            <div className="column small-12 large-8 partnership-wrapper">
              <h4>/ MAGNUM</h4>
              <div className="partnership-logo">
                <div className="row">{/* TODO */}</div>
              </div>
            </div>

            <div className="column small-12 large-8 partnership-wrapper">
              <h4>/ CHOPINE</h4>
              <div className="partnership-logo">
                <div className="row">{/* TODO */}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PartnershipsPage;
