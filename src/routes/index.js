const { Router } = require('express');
const alphaRouter = require('./alphaRoute');
const flattenRouter = require('./flattenRoute');
const quoteRouter = require('./quoteRoute');
const quotesRouter = require('./qutoesRoute');

const router = Router();

router.use('/alpha', alphaRouter)
router.use('/flatten', flattenRouter)
router.use('/quote', quoteRouter)
router.use('/quotes', quotesRouter)


module.exports = router;