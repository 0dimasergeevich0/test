const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Fly.io Test</title>
        <style>
          body { font-family: system-ui, sans-serif; text-align: center; padding-top: 10vh; background: #f0f4f8; color: #333; }
          .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }
          h1 { color: #0284c7; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Hello from Fly.io!</h1>
          <p>Your simple online application is up and running successfully.</p>
          <p><small>Running on region: <strong>${process.env.FLY_REGION || 'local'}</strong></small></p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
