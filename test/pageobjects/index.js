const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('dashboard', { data: '' });
});

app.get('/lambda', async (req, res) => {
  try {
    const response = await axios.get('YOUR_LAMBDA_FUNCTION_URL');
    res.render('dashboard', { data: response.data });
  } catch (error) {
    console.error(error);
    res.render('dashboard', { data: '' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});