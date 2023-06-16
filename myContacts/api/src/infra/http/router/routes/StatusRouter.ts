import { Router } from 'express';

const statusRouter = Router();

statusRouter.get('/', (_, response) => {
  response.json({
    message: 'MyContacts API is up and running!',
    version: process.env.npm_package_version
  });
});

export = statusRouter;
