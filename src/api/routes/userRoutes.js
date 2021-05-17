const router = require('express').Router();

const {
    homePageController,
    signUpController,
    signInController
} = require('../controllers/userControllers');

const { isLoggedIn } = require('../helpers/middleware/authtoken');
/**
 * @GET /
 * @acess PUBLIC
 * @desc It is the home Page. 
 */
router.get('/', isLoggedIn, homePageController)

/**
 * @POST /signup
 * @acess PUBLIC
 * @desc It Register the User in the Website.
 */
router.post('/signup', signUpController);

/**
 * @POST /signin
 * @acess PUBLIC
 * @desc It log in the user to the Website.
 */
router.post('/signin', signInController);


module.exports = router