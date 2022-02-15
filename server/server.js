const express = require('express');
const path = require('path');
const axios = require('axios');
const { Authorization } = require('../apikey');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');

app.use(express.static(DIST_DIR));

const headers = { Authorization };
const config = { headers };

app.get('/products/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, config)
    .then((result) => { res.send(result.data); })
    .catch((err) => { res.send(err); });
});

// app.get('/reviews', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', params)
//     .then((result) => { res.send(result.data); });
// });

// Questions / Answers
app.get('/questions/:id', (req, res) => {
  const localConfig = { headers };
  localConfig.params = { product_id: req.params.id, page: 1, count: 5 };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', localConfig)
    .then((result) => { res.send(result.data); })
    .catch((err) => { res.status(500).send(err); });
});

app.get('/answers/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers/?page=1&count=5`, config)
    .then((result) => { res.send(result.data); })
    .catch((err) => { res.status(500).send(err); });
});

// app.get('/user-cart', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', params)
//     .then((result) => { res.send(result.data); });
// });

app.listen(PORT, () => { console.log(`Listening to port ${PORT}`); });
