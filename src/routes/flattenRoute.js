const { Router } = require('express');
const { postAlpha } = require('../controllers/flattenCont');

const flattenRouter = Router();

flattenRouter.put('/', postAlpha)

module.exports = flattenRouter;