const express = require('express');
const router = express.Router();

// Define routes
router.get('/event_series', (req, res) => {

  res.header(`Access-Control-Allow-Origin`, process.env.CORS_WHITELIST);

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(process.env.TICKET_TAILOR_KEY).toString('base64'));
  headers.set('Accept', 'application/json');
  
  fetch("https://api.tickettailor.com/v1/event_series", {
        method: "GET",
        headers: headers
      })
      .then(response =>response.json())
      .then(data => res.json(data))
});

module.exports = router;