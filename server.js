'use strict';


//require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;
// app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

// app.use(express.static('./public'));


const express = require('express');
const server = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`I'm HERE on port ${PORT}`)
})

server.get('/data1', (req, res) => {
  res.send('hi there')
});

server.get('/data2', (req, res) => {
  let classes = [
    {name: 'hamza'},
    {name: 'saba'}
  ]
  res.send(classes);
})

server.use(express.static('./public'));






// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));


