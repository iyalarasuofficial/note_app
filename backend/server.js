require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false },  
});


app.get('/notes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM notes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/notes', async (req, res) => {
  const { title, description } = req.body;
  try {
    const insertResult = await pool.query(
      'INSERT INTO notes (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json(insertResult.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  try {
    await pool.query(
      'UPDATE notes SET title = $1, description = $2, done = $3 WHERE id = $4',
      [title, description, done, id]
    );
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM notes WHERE id = $1', [id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
