// app.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL;



if (!apiUrl) {
  console.error('API_URL environment variable is not set.');
  process.exit(1);
}

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});