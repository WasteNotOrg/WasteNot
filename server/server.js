const express = require('express');
const path = require('path');

// SERVER SETUP
const app = express();
const PORT = 3000;

// ROUTER IMPORTS
const feedRouter = require('./routes/feedRouter');
const landingRouter = require('./routes/landingRouter'); 

// PARSERS
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ROUTERS
app.use('/feed', feedRouter);
app.use('/landing', landingRouter) 

// SEND APP TO CLIENT
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')))

// CATCH ALL  
app.use((req, res) => res.status(404).send('This route does not exist!'));

// GLOBAL ERROR HANDLER
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

// INITIALIZE SERVER
app.listen(PORT, () => console.log('LISTENING ON PORT 3000'));