// docs: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

/* istanbul ignore next */
const proxy = require('http-proxy-middleware'); // eslint-disable-line import/no-extraneous-dependencies

/* istanbul ignore next */
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://graphql.fcccolumbus.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    }),
  );
};
