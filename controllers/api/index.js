const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/dashboard', userRoutes);

module.exports = router;