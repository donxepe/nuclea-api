const { Router } = require('express');
const { putAlpha } = require('../controllers/alphaCont');

const router = Router();

router.use('/alpha', putAlpha)


module.exports = router;