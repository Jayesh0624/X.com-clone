const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  const filePath = path.resolve('F:/x.com/index.js');
  console.log('Trying to send:', filePath);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err.message);
      res.status(err.status || 500).send('File could not be sent');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
