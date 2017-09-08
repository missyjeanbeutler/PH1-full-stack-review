const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      ctrl = require('./controller.js');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then(db => {
  app.set('db', db);

  db.init.seed_file().then(res => console.log('seed file success'))
    .catch(err => console.log(err, 'seed file failure'))
}).catch(err => console.log(err, 'db connection failure'))


app.get('/api/getAll', ctrl.getAll);


const port = process.env.PORT || 3005 
app.listen(port, () => console.log(`listening on port ${port}`));