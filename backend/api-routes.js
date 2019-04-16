// api-routes.js
// Initialize express router

// Set default API response
// router.get('/', function (req, res) {
//     res.json({
//         status: 'API Its Working',
//         message: 'Welcome to RESTHub crafted with love!',
//     });
// });
// Import contact controller
const userController = require('../backend/controller/userController');
const authroutes= require('../backend/authorization')
const router = require('express').Router();
// Contact routes
router.route('/register')
    .post(userController.register);
router.route('/login')
    .post(userController.login);
router.use('/auth',authroutes);
router.route('/getAllUsers')
    .post(userController.getAllUsers)
router.route('/forgotPassword')
    .post(userController.forgotPassword);
router.route('/resetPassword')
    .post(userController.resetPassword);
// Export API routes
module.exports = router;
