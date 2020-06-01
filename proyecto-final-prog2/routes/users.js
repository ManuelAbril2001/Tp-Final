var express = require('express');
var router = express.Router();

/* GET users listing. */
const controller = require('../controllers/usersController')

router.get("/", controller.index)
router.post("/login", controller.login)

module.exports = router;
