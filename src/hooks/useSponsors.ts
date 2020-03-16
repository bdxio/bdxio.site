import { useStaticQuery, graphql } from 'gatsby';
import { Sponsor, LevelSponsorEnum } from '@models/Sponsor';

const useSponsors = (level?: LevelSponsorEnum) => {
  const { allSponsorsJson } = useStaticQuery(
    graphql`
      query {
        allSponsorsJson(filter: { published: { eq: true } }) {
          nodes {
            id
            name
            level
            website
            logo
          }
        }
      }
    `
  );
  return level
    ? allSponsorsJson.nodes.filter(
        (sponsor: Sponsor) => sponsor.level === level
      )
    : allSponsorsJson.nodes;
};

export default useSponsors;
