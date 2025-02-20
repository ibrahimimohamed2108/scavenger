const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.send(`
    <h1>Docker Scavenger Hunt</h1>
    <p>Find the clues hidden in this Docker setup!</p>
    <p>Start by checking the environment variables (hint: use <code>docker inspect</code>).</p>
  `);
});

app.get('/clue', (req, res) => {
  const envClue = process.env.SECRET_PART_1 || '';
  const fileClue = fs.readFileSync(path.join(__dirname, 'data', 'clue.txt'), 'utf8').trim();
  const combinedClue = `${envClue}${fileClue}`;

  if (combinedClue === 'messi10') {
    res.send(`🎉 Congratulations! The secret word is: <strong>${combinedClue}</strong>`);
  } else {
    res.send(`
      🔍 Partial clues found! Combine them to get the secret word.
      <br>Environment clue: ${envClue}
      <br>File clue: ${fileClue}
    `);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
