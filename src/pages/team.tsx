import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import { Member } from '@models/Member';

const TeamPage = () => {
  const { allTeamJson } = useStaticQuery(
    graphql`
      query {
        allTeamJson {
          nodes {
            id
            firstname
            lastname
            onBoard
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
      <Layout>
        <div className="partnership">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">L'équipe</h3>
            </div>
          </div>

          <div className="row align-center users-container">
            <div className="flottant-right">
              <img src="img/svg/about_flottant.svg" />
            </div>
            <div className="column small-12 large-8">
              <h4>/ L'EQUIPE</h4>
              <div className="row users-container-content">
                {allTeamJson.nodes.map((member: Member) => (
                  <p key={member.id}>{member.firstname}</p>
                ))}
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
