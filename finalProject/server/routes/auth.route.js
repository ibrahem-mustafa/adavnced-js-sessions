const router = require("express").Router();
const { User } = require("../models/user.model");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const UserDto = require('../dto/user.dto')
const { JWT_PASSWORD } = require("../config/secret");
const {checkSchema} = require('express-validator')
const {Validate} = require('../middlewares/validation/validateInputs');
const ValidateToken = require("../middlewares/validation/validateToken");


router.get('/me', ValidateToken, async (req, res) => {
  // const user = UserDto(await User.findById(req.user.id));

  const userData = await User.findById(req.user.id);
  const user = UserDto(userData);
  res.json({
    user, 
    token: jwt.sign(user, JWT_PASSWORD),
  }) 
})

router.post("/signin", checkSchema({
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: 'Value Must Be A Valid Email'
  },
  password: {
    notEmpty: true
  }
}), Validate, async (req, res) => {

  

  const { email, password } = req.body;
  let statusCode,
    response = {};

  const userData = await User.findOne({ email });

  if (!userData) {
    statusCode = 404;
    response.msg = "Incorrect Email Or Password";
  } else {
    const validPassword = bcrypt.compareSync(password, userData.password);

    if (!validPassword) {
        statusCode = 400;
        response.msg = "Incorrect Email Or Password";
    } else {
        const user = UserDto(userData)
        response.user = user;
        response.token = jwt.sign(user, JWT_PASSWORD)
        statusCode = 200;
    }
  }

  res.status(statusCode).json(response);
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    return res.status(400).json({
      msg: "Email Is Already Exist",
    });
  }

  const user = User({
    name,
    email,
  });

  const hashedPassword = bcrypt.hashSync(password, 10);
  user.password = hashedPassword;

  await user.save();

  res.json({
    msg: "Account Created Successfully",
  });
});

module.exports = router;
