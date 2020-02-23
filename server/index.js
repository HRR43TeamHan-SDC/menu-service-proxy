const express = require('express');
const axios = require('axios');
const app = express();
//
require('dotenv').config();

const PROXY_PORT = process.env.PROXY_PORT || 8080;
const MENU_HOSTNAME = process.env.MENU_HOSTNAME || 'localhost';
const MENU_PORT = process.env.MENU_PORT || 8001;



app.get('/gettitle/:id', (req, res) => {
  axios.get(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`)
  .then(response => response.data)
  .then(data => res.send({data}))
  .catch(err => console.log('error at proxy serving',err));
});

app.get('/getmenu/:id', (req, res) => {
  axios.get(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`)
  .then(response => response.data)
  .then(data => res.send(data))
  .catch(err => console.log('error at proxy serving',err));
});


app.use('/:id',express.static('public'));


app.listen(PROXY_PORT, () => {
  console.log(`App listening on port ${PROXY_PORT}`);
});