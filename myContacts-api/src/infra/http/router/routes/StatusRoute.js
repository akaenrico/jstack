const {Router} = require('express');

const statusRoute = Router();

statusRoute.get('/', (_, response) => {
  response.status(200).json({
    message: 'MyContacts API is up and running!',
    version: process.env.npm_package_version
  });
});

module.exports = statusRoute;
