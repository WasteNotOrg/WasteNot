const db = require('../models/model.js');

const feedController = {};

feedController.getUsers = (req, res, next) => {
  const getQuery = 'SELECT * FROM user_info';
  db.query(getQuery)
    .then((users) => {
      res.locals.users = users.rows;
      return next();
    })
    .catch((err) => next({ error: err }));
};

feedController.getFilteredUsers = (req, res, next) => {
  const email = res.locals.email;
  const query = `SELECT * FROM user_info WHERE email = ${email}`;
}

module.exports = feedController;
