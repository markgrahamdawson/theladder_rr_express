const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT;

const routes = require('./routes');

app.use('/api', routes);

app.use(cors({origin: process.env.CORS_WHITELIST}))

app.listen(port, function(){
  console.log('Express listening on port', this.address().port);
});