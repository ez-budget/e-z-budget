const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./story-routes');
const commentRoutes = require('./comment-routes');
const budgetRoutes = require('../budget-routes');



 router.use('/users', userRoutes);
router.use('/posts', postRoutes);
 router.use('/comments', commentRoutes);
 router.use('/budget', budgetRoutes);

 module.exports = router;