var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const fileAnalyseRouter = require('./routes/api/fileanalyse');
const bodyParser = require('body-parser');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api/fileanalyse', fileAnalyseRouter);

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
