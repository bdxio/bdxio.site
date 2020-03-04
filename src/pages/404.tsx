import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div className="contact">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">Not Found</h3>
            </div>
          </div>
          <div className="row auto align-center contact-container">
            <div className="column small-12">
              <div className="row align-middle contact-container-block">
                <div className="column small-12 text-center">
                  <p className="subtitle">Wrong way !</p>
                </div>
                <div className="column small-12 text-center">
                  <Link to="/" className="button small primary">
                    Revenir à l'accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default NotFoundPage;
