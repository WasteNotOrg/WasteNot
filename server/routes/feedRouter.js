const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

router.post('/', feedController.getFilteredUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});
module.exports = router;
