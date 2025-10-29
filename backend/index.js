const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3001;

app.use(cors());

const db = new sqlite3.Database('../becal_sqlite.db');

app.get('/becarios', (req, res) => {
  db.all('SELECT DISTINCT * FROM BECAL_IMPORTADO', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
