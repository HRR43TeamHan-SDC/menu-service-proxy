require('newrelic');
require('dotenv').config();
const express = require('express');
const app = express();
//

const PROXY_PORT = process.env.PROXY_PORT || 8080;
const MENU_HOSTNAME = process.env.MENU_HOSTNAME || 'localhost';
const MENU_PORT = process.env.MENU_PORT || 8001;



app.get('/gettitle/:id', (req, res) => {
  res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
});

app.get('/getmenu/:id', (req, res) => {
  res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
});


app.post('/api/restaurant', (req, res) => {
  res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
})


// Try to use the following vs all the routes to simplify code
// app.use('/api/restaurant/:id', (req, res) => {
//   console.log(req.url);
//   res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`)
// });


app.route('/api/restaurant/:id')
  .get((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .put((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .delete((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  });


app.route('/api/menu/:id')
  .get((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .post((req, res) => {
    // Used to post a new section
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .put((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .delete((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  });


app.route('/api/section/:id')
  .get((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .post((req, res) => {
    // Used to post a new item
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .put((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .delete((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  });


app.route('/api/item/:id')
  .get((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .put((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  })
  .delete((req, res) => {
    res.redirect(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`);
  });


// app.get('/getmenu/:id', (req, res) => {
//   axios.get(`http://${MENU_HOSTNAME}:${MENU_PORT}${req.url}`)
//   .then(response => response.data)
//   .then(data => res.send(data))
//   .catch(err => console.log('error at proxy serving',err));
// });


app.use('/:id', express.static('public'));


app.listen(PROXY_PORT, () => {
  console.log(`App listening on port ${PROXY_PORT}`);
});