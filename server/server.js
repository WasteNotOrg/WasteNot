const express = require('express');
const path = require('path');

// SERVER SETUP
const app = express();
const PORT = 3000;

// ROUTERS
const feedRouter = require('./routes/feedRouter');

app.use('/feed', feedRouter);
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')))

// Catch all unknown endpoints
app.use((req, res) => res.status(404).send('This route does not exist!'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' }
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log('LISTENING ON PORT 3000'));