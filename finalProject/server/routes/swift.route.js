const { routes } = require('../app')


const router = require('express').Router()
const branchesRoutes = require('./swift/branches.routes')


   // BRANCHES ROUTES
   router.use("/branches", branchesRoutes);
   router.use("/transaction", branchesRoutes);

module.exports = router


// app.use('users', usersRoutes) => / + routes
// router.user('/branches', branchesRoutes) => /swift + /branches + routes