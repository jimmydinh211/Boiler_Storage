const authController = require("../controllers/authControllers");

const router = require("express").Router();

router.get('/signup', authController.getSignUp)
router.post('/signup', authController.postSignUp)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

module.exports = router;