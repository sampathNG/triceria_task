const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./models/config')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const routes = require('./router/routes')

app.use("/",routes)
app.listen(5000,console.log("running on port 5000"));