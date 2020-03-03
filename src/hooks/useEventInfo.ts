import { useStaticQuery, graphql } from 'gatsby';

const useEventInfo = () => {
  const { eventJson } = useStaticQuery(
    graphql`
      query {
        eventJson {
          general {
            closingDate
            openingDate
          }
          cfp {
            closingDate
            openingDate
          }
          programPublishingDate
          registration {
            earlySoldout
            normalSoldout
            opened
          }
        }
      }
    `
  );
  return eventJson;
};

export default useEventInfo;
