const { Router } = require('express');
const { postAlpha } = require('../controllers/flattenCont');

const flattenRouter = Router();

flattenRouter.post('/', postAlpha)

module.exports = flattenRouter;