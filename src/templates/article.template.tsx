import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout path={frontmatter.path}>
        <div className="contact">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">{frontmatter.title}</h3>
            </div>
          </div>

          <div className="row align-center users-container">
            <article dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    </>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
