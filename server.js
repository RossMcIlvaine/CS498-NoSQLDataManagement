const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
});

app.listen(8080, '0.0.0.0', () => {
  console.log(`Server running on port 8080`);
});
