const router = require("express").Router();
const { User } = require("../models/user.model");

const bcrypt = require('bcrypt')
router.get("/", async (req, res) => {
 const admin = User({
     role: 'admin',
     name: 'admin',
     email: 'admin',
     phone: '0101811519187',
     category: 'Adminstration'
 })

 admin.password = bcrypt.hashSync('admin', 10);

 await admin.save();
 res.json({msg: "System Init Successfully"})

});

module.exports = router;
