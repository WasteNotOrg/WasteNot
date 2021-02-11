const db = require('../models/model.js');

const feedController = {};

// feedController.getUsers = (req, res, next) => {
//   const getQuery = 'SELECT * FROM user_info';
//   db.query(getQuery)
//     .then((users) => {
//       res.locals.users = users.rows;
//       return next();
//     })
//     .catch((err) => next({ error: err }));
// };

// get users based on donating status
feedController.getFilteredUsers = (req, res, next) => {
  // get the email from verified user
  const { email } = res.locals.email;
  const query = `SELECT * FROM user_info WHERE email = ${email}`;
  // query the db based on user email to get all user info
  db.query(query)
    .then((response) => response.json())
    .then((user) => {
      // check if the donator status of the user is true
      if (user.donator === true) {
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
    });
};

module.exports = feedController;
