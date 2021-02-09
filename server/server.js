const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')))

app.listen(PORT, () => console.log('LISTENING ON PORT 3000'));