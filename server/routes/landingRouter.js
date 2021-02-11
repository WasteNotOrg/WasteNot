const express = require('express');
const db = require('../models/model.js');
const router = express.Router();
const landingController = require('../controllers/landingController');

router.post('/', landingController.verifyUser, (req, res) => {
  if (res.locals.verifiedUser.length > 0) {
    res.status(200).redirect('/home');
  } else {
    res.status(200).json({ isVerified: false });
  }
});

module.exports = router;
