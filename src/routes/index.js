const { Router } = require('express');
const { putAlpha } = require('../controllers/alphaCont');
const { postAlpha } = require('../controllers/flattenCont');

const router = Router();

router.use('/alpha', putAlpha)
router.use('/flatten', postAlpha)


module.exports = router;