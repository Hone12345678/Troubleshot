const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes')
const solutionRoutes = require('./categoryRoutes')
const userRoutes = require('./categoryRoutes')
const tagRoutes = require('./categoryRoutes')

router.use('/categories', categoryRoutes);
router.use('/solutions', solutionRoutes);
router.use('/users', userRoutes);
router.use('/tags', tagRoutes)

module.exports = router;