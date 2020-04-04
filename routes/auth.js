const express = require('express');
const {
	register,
	login,
	logout,
	getMe,
	forgotPassword,
	resetPassword,
	updateDetails,
	updatePassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updateDetails', protect, updateDetails);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatepassword', protect, updatePassword);
module.exports = router;
