const db = require('../models/model.js');

const landingController = {};

landingController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;
  console.log("Email >>>>", email);
  console.log("password >>>> ", password);
  const query = `SELECT * FROM user_info WHERE email = $1 AND password = $2`
  db.query(query, [email, password])
    // .then((res) => res.json())
    .then((data) => {
      console.log("Data >>>> ", data);
      res.locals.verifiedUser = data;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next();
    })

};

module.exports = landingController;