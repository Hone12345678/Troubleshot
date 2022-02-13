const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes')
const solutionRoutes = require('./solutionRoutes')
const userRoutes = require('./userRoutes')
// const tagRoutes = require('./tagRoutes')
// const solvetagRoutes = require('./solveTagRoutes')

router.use('/categories', categoryRoutes);
router.use('/solutions', solutionRoutes);
router.use('/users', userRoutes);
// router.use('/tags', tagRoutes);
// router.use('/solvetag', solvetagRoutes);

module.exports = router;