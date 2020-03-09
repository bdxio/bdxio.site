const path = require('path');
const fetch = require('node-fetch');
const crypto = require('crypto');

const CONFERENCE_HALL_API =
  'https://conference-hall.io/api/v1/event/XGTzWawB3ZwLR7u462O8?key=b7d1e043-1324-4d4b-8218-515e4532a52f&state=confirmed';

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@models': path.resolve(__dirname, 'src/models')
      }
    }
  });
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const { speakers } = await fetch(CONFERENCE_HALL_API).then(res => res.json());
  // Process data into nodes.
  speakers.map((speaker, i) => {
    // Create your node object
    const speakerNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Speaker` // name of the graphQL query --> allSpeaker {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      // Other fields that you want to query with graphQl
      displayName: speaker.displayName,
      bio: speaker.bio,
      company: speaker.company,
      avatar: {
        primary: speaker.photoURL
      }
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(speakerNode))
      .digest(`hex`);
    // add it to speakerNode
    speakerNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(speakerNode);
  });
  // We're done, return.
  return;
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/article.template.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {} // additional data can be passed via context
    });
  });
};
