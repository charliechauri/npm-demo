const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', express.static('static/pages'));

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
