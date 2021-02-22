const { routes } = require('../app')


const router = require('express').Router()
const branchesRoutes = require('./swift/branches.routes')
const transactionsRoutes = require('./swift/transactions.routes')


   // BRANCHES ROUTES
   router.use("/branches", branchesRoutes);
   router.use("/transaction", transactionsRoutes);

module.exports = router


// app.use('users', usersRoutes) => / + routes
// router.user('/branches', branchesRoutes) => /swift + /branches + routes