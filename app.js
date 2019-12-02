const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.set('Content-Type', 'text/html');
  res.end(`<html><body>${sum}</body></html>`);
});
