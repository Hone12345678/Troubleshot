const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/', (req,res) => {
    res.send('Testing');
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });