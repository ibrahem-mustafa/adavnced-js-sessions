const multer = require("multer");

const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = `uploads/${req.user.id}/`;
    const dirExist = fs.existsSync(dirPath);

    if (!dirExist) {
        fs.mkdirSync(dirPath, {recursive: true})
    }
      cb(null, dirPath)
  },
  filename: function (req, file, cb) {
      const ext = file.mimetype.split('/')[1]

      const filename = file.originalname.split('.')[0]
    cb(null, `${filename}-${Date.now()}.${ext}`);
  },
});

const Upload = multer({
  storage
});

module.exports = {Upload}
