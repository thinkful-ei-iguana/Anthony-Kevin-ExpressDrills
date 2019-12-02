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
  const cipher = text
    .toUpperCase()
    .split('')
    .map(letter => {
      const code = letter.charCodeAt(0);
      let diff = code - start;
      diff = diff + shift;
      const newChar = String.fromCharCode(start + diff);
      return newChar;
    })
    .join('');
  res.set('Content-Type', 'text/html');
  res.end(`<html><body>${cipher}</body></html>`);
});

app.get('/lotto', (req, res) => {
  const numbers = req.query.arr;
  const numberVault = [];
  let matches = [];
  const min = Math.ceil(20);
  const max = Math.floor(1);
  for (let i = 0; i < 6; i++) {
    let generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    numberVault.push(generatedNumber);
  }
  const jointArrays = numbers.concat(numberVault);
  for (let i = 0; i <= jointArrays.length; i++) {
    for (let j = i; j <= jointArrays.length; j++) {
      if (i != j && jointArrays[i] == jointArrays[j]) {
        matches.push(i);
      }
    }
  }
  let matchCounter = matches.length;
  let results;
  if (matchCounter < 4) {
    results = `<html><body>You only got ${matchCounter} matches sorry<p>YOU LOSE</p></body></html>`;
  } else if (matchCounter === 4) {
    results = `<html><body>You got ${matchCounter} matches<p>YOU WIN</p><p>A free lottery ticket</p></body></html>`;
  } else if (matchCounter === 5) {
    results = `<html><body>You got ${matchCounter} matches<p>YOU WIN</p><p>$100</p></body></html>`;
  } else if (matchCounter === 6) {
    results = `<html><body>You got ${matchCounter} matches<p>YOU WIN</p><p>$1,000,000</p></body></html>`;
  }
  res.set('Content-Type', 'text/html');
  res.end(`${results}`);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});

// ?arr=1&arr=2&arr=3&arr=4&arr=5&arr=6
