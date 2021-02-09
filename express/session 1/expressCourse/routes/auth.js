// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const {User} = require('../models/user.model');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt')


function UserDto({_id, name, email, phone, category, role}) {
  return {
    id: _id,
    name, email, phone, category, role
  }
}

router.post('/login', async (req, res) => {
  let statusCode, response = {};
  const {email, password} = req.body;

  function setInvalidResponse() {
    statusCode = 400;
    response.msg = 'Invalid Email Or Password';
  }
  
  // 1: check if There Is A User WIth Given Email
  const user = await User.findOne({email});
  // 4: If Data Not Matched (email OR password) return Msg About That
  if (!user) {
    setInvalidResponse()
  } else {
    // 2: if User Exists Check If Given Password Matches The User Password
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      setInvalidResponse()
    } else {
      // 3: If Data Matched Return User Data
      statusCode = 200;
      response.user = UserDto(user);
      response.token = jwt.sign(response.user, '53node92')
    }
  }

  res.status(statusCode).json(response);
})


router.post('/signup', async (req, res) => {
  // name, email, phone, password, category, address
  let statusCode, response = {}
  const {name, email, phone, password, category, address} = req.body;


  const existsUser = await User.findOne({$or: [
    {email},
    {phone}
  ]})


  if (existsUser) {
    statusCode = 400;
    response.msg = 'User Already Exists.'
  } else {
    const user = User({
      name, email, phone, password, category, address
    })
  
    user.password = bcrypt.hashSync(password, 10);
  
    
    await user.save();
    statusCode = 201;
    response.msg = 'User Created Successfully'
  }

  

  res.status(statusCode).json(response)

})


module.exports = router;