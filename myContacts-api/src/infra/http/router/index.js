const {Router} = require('express');

const statusRoute = require('./routes/StatusRoute');
const contactRoute = require('./routes/ContactRoute');

const router = Router();

router.use('/contacts', contactRoute);
router.use('/status', statusRoute);

module.exports = router;
