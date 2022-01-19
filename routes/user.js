const express = require('express')
const {userForm} = require('../controllers/user')
const router = express.Router()

router.route('/').get(userForm);


module.exports = router;