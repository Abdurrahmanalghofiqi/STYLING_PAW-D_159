const express = require('express');
const router = express.Router();

let todos = []; // Simpanan sementara

// GET: Halaman Todo
router.get('/', (req, res) => {
  res.render('todo', { todos });
});

// POST: Tambah Todo
router.post('/', (req, res) => {
  const { title, description } = req.body;
  todos.push({ id: Date.now().toString(), title, description });
  res.sendStatus(201);
});

// PUT: Update Todo
router.put('/', (req, res) => {
  const { id, title, description } = req.body;
  todos = todos.map(todo => (todo.id === id ? { id, title, description } : todo));
  res.sendStatus(200);
});

// DELETE: Hapus Todo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.sendStatus(200);
});

module.exports = router;
