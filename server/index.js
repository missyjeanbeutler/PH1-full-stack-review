const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());





const port = process.env.PORT || 3005 
app.listen(port, () => console.log(`listening on port ${port}`));