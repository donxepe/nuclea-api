const { Router } = require('express');
const { putAlpha } = require('../controllers/alphaCont');

const alphaRouter = Router();

alphaRouter.put('/', putAlpha)


module.exports = alphaRouter;