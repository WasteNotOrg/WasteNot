const express = require('express');
const db = require('../models/model.js');
const router = express.Router();
const feedController = require('../controllers/feedController');

router.get('/', feedController.getUsers, (req, res) => {
  // console.log(res.locals.users);
  res.status(200).json(res.locals.users);
});

module.exports = router;
