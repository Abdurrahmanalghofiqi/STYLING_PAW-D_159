const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const todoRoutes = require('./routes/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/todo', todoRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
