const db = require("../models/model.js");

const landingController = {};

landingController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM user_info WHERE email = $1 AND password = $2";
  db.query(query, [email, password])
    .then((data) => {
      // If a matching account is found, return the thruthy value of one to landingRouter
      res.locals.verifiedUser = data.rows.length;
      res.locals.donatorStatus = data.rows[0].donator;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = landingController;
