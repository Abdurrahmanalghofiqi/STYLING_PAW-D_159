const express = require('express');
const router = express.Router();

// Route untuk halaman login
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
