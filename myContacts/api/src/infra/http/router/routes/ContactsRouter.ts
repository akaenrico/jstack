import { Router } from 'express';

import ContactController from '../../../../app/controllers/ContactController';

const contactRouter = Router();

contactRouter.get('/', ContactController.index);
contactRouter.get('/', ContactController.show);
contactRouter.post('/', ContactController.store);
contactRouter.put('/', ContactController.update);
contactRouter.delete('/', ContactController.delete);

export = contactRouter;
