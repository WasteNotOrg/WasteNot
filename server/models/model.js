// require pool from the node postgresql
const { Pool } = require('pg');

// get the url from the elephant database
const PG_URI = require('../../serverConfig');

// create an instance of the pool
const pool = new Pool({
  connectionString: PG_URI,
});

// Export the query method of the pool
module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
