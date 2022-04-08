const { Router } = require('express');
const { getQuotes } = require('../controllers/quotesCont');

const quotesRouter = Router();

quotesRouter.get('/', getQuotes)

module.exports = quotesRouter;