const {Router} = require('express');

const contactRoute = Router();

contactRoute.get('/');
contactRoute.get('/:id');
contactRoute.post('/');
contactRoute.put('/:id');
contactRoute.delete('/:id');

module.exports = contactRoute;
