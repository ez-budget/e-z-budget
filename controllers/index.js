const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const landingRoutes = require('./landing-routes.js');

<<<<<<< HEAD
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/landing', landingRoutes);
=======
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/', landingRoutes);
>>>>>>> develop

module.exports = router;