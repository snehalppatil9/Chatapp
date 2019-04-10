// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
// router.get('/', function (req, res) {
//     res.json({
//         status: 'API Its Working',
//         message: 'Welcome to RESTHub crafted with love!',
//     });
// });
// Import contact controller
var userController = require('../backend/controller/userController');
// Contact routes
router.route('/registration')
    .post(userController.registration);
router.route('/login')
    .post(userController.login);
router.route('/forgotPassword')
    .post(userController.forgotPassword);
router.route('/resetPassword')
    .post(userController.resetPassword);
// Export API routes
module.exports = router;