// const router = require('express').Router();
const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
  res.json({
    result: 'login'
  })
})


router.post('/signup', (req, res) => res.json({
  result: 'signup'
}))


module.exports = router;