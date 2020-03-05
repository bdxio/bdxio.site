var path = require('path');

exports.onCreateWebpackConfig = function ({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@models': path.resolve(__dirname, 'src/models')
            }
        }
    })
}