const express = require('express');
const db = require('../models/model.js');
const router = express.Router();
const feedController = require('../controllers/feedController');

// router.post('/', feedController.getUsers, (req, res) => {
//   res.status(200).json(res.locals.users);
// });

router.post('/', feedController.getFilteredUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});
module.exports = router;
