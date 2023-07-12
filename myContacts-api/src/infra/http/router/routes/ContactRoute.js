const {Router} = require('express');

const ContactController = require('../../../../app/controller/ContactController');

const contactRoute = Router();

contactRoute.get('/', ContactController.index);
contactRoute.get('/:id', ContactController.show);
contactRoute.post('/', ContactController.store);
contactRoute.put('/:id', ContactController.update);
contactRoute.delete('/:id', ContactController.delete);

module.exports = contactRoute;
