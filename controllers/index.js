const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("Check your URL. This is not a recognized route!")
});

module.exports = router;