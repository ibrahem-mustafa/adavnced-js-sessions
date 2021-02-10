const router = require('express').Router()
const {Upload}  = require('../config/upload')
const {validateToken} = require('../methods/validation')


router.post("/upload", validateToken,  Upload.single("cover"), (req, res) => {
  res.json({ path: req.file.path });
});

module.exports = router;