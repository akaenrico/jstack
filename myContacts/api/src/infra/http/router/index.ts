import { Router } from 'express';

import statusRouter from './routes/StatusRouter';
import contactsRouter from './routes/ContactsRouter';

const router = Router();

router.use('/status', statusRouter);
router.use('/contacts', contactsRouter);

export = router ;
