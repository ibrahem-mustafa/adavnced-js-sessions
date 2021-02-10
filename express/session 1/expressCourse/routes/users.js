const router = require('express').Router();
const {ObjectId} = require('mongoose').Types

const {isAdmin, validateToken} = require('../methods/validation')
const {UserDto} = require('../dto/user/getUser.dto')

const {User} = require('../models/user.model')
const {Article} = require('../models/article.model');


router.get('/',validateToken, isAdmin, async (req, res) => {
    const admin = req.user;
    const users = await User.find({
        role: {$ne: 'admin'}
    })

    res.status(200).json({users})
})

router.get("/:id", validateToken, isAdmin, async (req, res) => {

    let statusCode, response = {}
    const {id} = req.params;

    if (!ObjectId.isValid(id)) {
        statusCode = 400;
        response.msg = 'Invalid Publisher Id'
    } else {
        const user = await User.findById(id);

        if (!user) {
            statusCode = 404;
            response.msg = 'Can Not Find A User WIth Given Id'
        } else {
            statusCode = 200;
            response.user = UserDto(user);
        }
    }

    res.status(statusCode).json(response);
   
});

router.put('/:id', validateToken, isAdmin, async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    let statusCode, response = {};

    const user = await User.findById(id);

    if (!user) {
        statusCode = 404;
        response.msg = "Can't Find User With Given Id";
    } else {

        user.role = role;
        await user.save();
        statusCode = 200;
        response.user = UserDto(user);
    }

    res.status(statusCode).json(response);

})

router.delete('/:id', validateToken, isAdmin, async (req, res) => {
    const { id } = req.params;

    let statusCode,
      response = {};

    const user = await User.findById(id);

    if (!user) {
      statusCode = 404;
      response.msg = "Can't Find User With Given Id";
    } else {
      await user.delete();
      await Article.deleteMany({'publisher.id': id})
      statusCode = 200;
      response.msg = "User Deleted Successfully"
    }

    res.status(statusCode).json(response);
});




module.exports = router;