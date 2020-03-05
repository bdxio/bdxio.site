import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface PropsType {
  title: string;
  description?: string;
  lang?: string;
  meta?: [];
}

const SEO = ({ title, description, lang = 'fr', meta = [] }: PropsType) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `msapplication-TileColor`,
          content: '#ffffff'
        },
        {
          name: `msapplication-TileImage`,
          content: '/favicon/ms-icon-144x144.png'
        },
        {
          name: `theme-color`,
          content: '#ffffff'
        }
      ].concat(meta)}
      link={[
        ...[57, 60, 72, 76, 114, 120, 144, 152, 180].map((size: number) => {
          return {
            rel: 'apple-touch-icon',
            sizes: `${size}x${size}`,
            href: `/favicon/apple-icon-${size}x${size}.png`
          };
        }),
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: `192x192`,
          href: `/favicon/android-icon-192x192.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: `32x32`,
          href: `/favicon/favicon-32x32.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: `96x96`,
          href: `/favicon/favicon-96x96.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: `16x16`,
          href: `/favicon/favicon-16x16.png`
        },
        {
          rel: 'manifest',
          href: `/favicon/manifest.json`
        }
      ]}
    />
  );
};

export default SEO;
