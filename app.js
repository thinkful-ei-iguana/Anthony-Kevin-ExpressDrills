const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.set('Content-Type', 'text/html');
  res.end(`<html><body>${sum}</body></html>`);
});

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = Number(req.query.shift);
  const start = 'A'.charCodeAt(0);
  const cipher = text.toUpperCase().split('').map(letter => {
    const code = letter.charCodeAt(0);
    let diff = code - start;
    diff= diff + shift;
    const newChar = String.fromCharCode(start + diff);
    return newChar;
  }).join('');
  res.set('Content-Type', 'text/html');
  res.end(`<html><body>${cipher}</body></html>`);
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});