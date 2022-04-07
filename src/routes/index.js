const { Router } = require('express');
const alphaRouter = require('./alphaRoute');
const flattenRouter = require('./flattenRoute');
const quoteRouter = require('./quoteRoute');

const router = Router();

router.use('/alpha', alphaRouter)
router.use('/flatten', flattenRouter)
router.use('/quote', quoteRouter)


module.exports = router;