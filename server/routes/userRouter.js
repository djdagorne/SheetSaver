const router = require('express').Router();

const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

// async so we can wait for promises
router.post('/register', userController.registerUser)
  .post('/login', userController.loginUser)
  .delete('/delete', auth, userController.deleteUser)
  .post('/tokenIsValid', userController.deleteUser)
  .get('/', auth, userController.findOneUser);

module.exports = router;
