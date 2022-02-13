const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes')
const solutionRoutes = require('./solutionRoutes')
const userRoutes = require('./userRoutes')

router.use('/categories', categoryRoutes);
router.use('/solutions', solutionRoutes);
router.use('/users', userRoutes);


module.exports = router;