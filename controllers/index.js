const router = require('express').Router();
const budgetRoutes = require('./budget-routes');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/budget', budgetRoutes);
router.use('/api', apiRoutes);


module.exports = router