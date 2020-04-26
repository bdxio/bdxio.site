import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useMobileDetect from 'use-mobile-detect-hook';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import { Member } from '@models/Member';
import MemberElement from '../components/common/MemberElement';

const TeamPage = ({ path }: { path: string }) => {
  let line = 0; // Private lines counter
  const detectMobile = useMobileDetect();
  const { allTeamJson } = useStaticQuery(
    graphql`
      query {
        allTeamJson {
          nodes {
            id
            displayName
            bio
            company
            avatar {
              primary
              hover
            }
            contact {
              email
              twitter
              linkedin
              website
            }
          }
        }
      }
    `
  );
  return (
    <>
      <SEO title="L'équipe" />
      <Layout path={path}>
        <div className="partnership">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">L'équipe</h3>
            </div>
          </div>

          <div className="row align-center users-container">
            <div className="flottant-right">
              <img src="/img/svg/about_flottant.svg" />
            </div>
            <div className="column small-12 large-8">
              <h4>/ L'EQUIPE</h4>
              <div className="row users-container-content">
                {allTeamJson.nodes.map((member: Member, i: number) => {
                  if (!detectMobile.isMobile() && i % 2 === 0) line++;
                  return (
                    <MemberElement
                      key={`member_${i}`}
                      member={member}
                      isAtRight={line % 2 === 0}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flottant-left">
              <img src="/img/svg/theme2_flottant.svg" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default TeamPage;
