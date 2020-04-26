import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

const NotFoundPage = ({ path }: { path: string }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          nodes {
            id
            frontmatter {
              title
              subtitle
              thumbnail
              date
              creator
              path
            }
            html
          }
        }
      }
    `
  );
  return (
    <>
      <SEO title="Articles" />
      <Layout path={path}>
        <div className="news">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">Articles</h3>
            </div>
          </div>
          <div className="fixContainer">
            {allMarkdownRemark.nodes.map((article, i) => {
              return (
                <div className="row newsContainer" key={`'article_${i}`}>
                  <div className="columns small-12 large-10 large-offset-1">
                    <section className="row align-middle">
                      <div className="newsContainer-newsFlottant small-12">
                        <img src="/img/svg/price_flottant.svg" />
                      </div>
                      <div className="columns newsContainer-img small-12 large-4">
                        <img src={article.frontmatter.thumbnail} />
                      </div>
                      <div className="columns small-12 large-8 newsContainer-content">
                        <Link to={article.frontmatter.path}>
                          <h4>{article.frontmatter.title}</h4>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: article.html }}
                        />
                      </div>
                    </section>
                    <div className="row">
                      <div className="columns large-12 someNews-content-item-button text-right">
                        <Link
                          className="button tiny secondary"
                          to={article.frontmatter.path}
                        >
                          Lire la suite
                          <i className="fas fa-angle-right" />
                        </Link>
                      </div>
                    </div>
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
export default NotFoundPage;
