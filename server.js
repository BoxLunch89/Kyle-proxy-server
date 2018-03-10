
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.use('/q-and-a', (req, res) => {
  axios.get(`http://127.0.0.1:3004${req.originalUrl}`)
    .then(moduleRes => moduleRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      //console.log(err);
      res.send();
    });
});




app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});