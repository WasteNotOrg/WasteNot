const express = require('express');
const db = require('../models/model.js');

const router = express.Router();
const landingController = require('../controllers/landingController');

router.post('/', landingController.verifyUser, (req, res) => {
  // If the value of verifiedUser is truthy, authenticate the user
  if (res.locals.verifiedUser) {
    res.status(200).json({ 
      isVerified: true,
      donatorStatus: res.locals.donatorStatus
    });
  } else {
    res.status(200).json({ isVerified: false });
  }
});

module.exports = router;
