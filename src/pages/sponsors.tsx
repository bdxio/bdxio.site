import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import useSponsors from '@hooks/useSponsors';
import useEventInfo from '@hooks/useEventInfo';
import { Sponsor, LevelSponsorEnum } from '@models/Sponsor';

const SponsorElement = (sponsor: Sponsor) => (
  <div className="columns auto partner-card">
    <div className="text-center">
      <a href={sponsor.website} title={sponsor.name} target="_blank">
        <img src={sponsor.logo} alt={sponsor.name} width={150} />
      </a>
    </div>
  </div>
);

const SponsorsPage = ({ path }: { path: string }) => {
  const allSponsors = useSponsors();
  const eventInfo = useEventInfo();

  return (
    <>
      <SEO title="Sponsors" />
      <Layout path={path}>
        <div className="partnership">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">Sponsors</h3>
            </div>
          </div>

          <div className="row align-center users-container">
            <div className="column small-12 text-center">
              <p className="subtitle">
                Les sponsors qui soutiennent l'édition 2020 🧡
              </p>
            </div>
            <div className="column small-12 text-center">
              <a
                href={eventInfo.general.plaquetteUrl}
                target="_blank"
                className="button small primary"
              >
                Devenir sponsors
              </a>
            </div>
            {Object.entries(LevelSponsorEnum).map((entry: any) => {
              const sponsors = allSponsors.filter(
                (sponsor: Sponsor) => sponsor.level === entry[0]
              );
              return sponsors.length === 0 ? null : (
                <div
                  key={entry[0]}
                  className="column small-12 large-8 partnership-wrapper"
                >
                  <h4>/ {entry[1]}</h4>
                  <div className="partnership-logo">
                    <div className="row">{/* TODO PartnerElement */}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default SponsorsPage;
