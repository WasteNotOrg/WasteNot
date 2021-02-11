const db = require('../models/model.js');

const feedController = {};

// get users based on donating status
feedController.getFilteredUsers = (req, res, next) => {
  // get the user's donator status
  const { donatorStatus } = req.body;
      // check if the donator status of the user is true
      if (donatorStatus) {
        // if true, then query db for all users who have a donator status of false
        const donatorQuery = 'SELECT * FROM user_info WHERE donator = false';
        db.query(donatorQuery)
          .then((users) => {
            res.locals.users = users.rows;
            return next();
          })
          .catch((err) => next({ error: err }));
      }
      // if status is false, query db for every user with a donator status of true.
      else {
        const donatorQuery = 'SELECT * FROM user_info WHERE donator = true';
        db.query(donatorQuery)
          .then((users) => {
            res.locals.users = users.rows;
            return next();
          })
          .catch((err) => next({ error: err }));
      }
}

module.exports = feedController;
