const morgan = require('morgan');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
