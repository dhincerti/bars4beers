var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for REST
  var rest = restful.model('bars', app.models.bars).methods([ 'get', 'post', 'put', 'delete' ]);

  // Register this endpoint with the application
  rest.register(app, route);

  // Return middleware
  return function(req, res, next) {
    next();
  };
};