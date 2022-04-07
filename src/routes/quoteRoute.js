const { Router } = require('express');
const { postQuote } = require('../controllers/quoteCont');

const quoteRouter = Router();

quoteRouter.post('/', postQuote)

module.exports = quoteRouter;