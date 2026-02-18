const express = require('express');
const app = express();
const PORT = 8080;

app.get('/greeting', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
