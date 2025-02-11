const express = require('express');
const app = express();
// Make sure this line is BEFORE app.post
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the parsed JSON
  if (!req.body) {
    return res.status(400).send('No data received');
  }
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));