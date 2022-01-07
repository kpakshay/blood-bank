const express = require("express");
// const dotenv = require("dotenv");
const mongo = require('./connection.js');
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js')
var registerRouter = require('./routes/register.js');
const cors=require("cors");
const authorize=require("./modules/authorize")
// dotenv.config();
const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();
app.use(cors());
app.use('/register', registerRouter);

app.use(authorize.AuthorizeUser);
app.use('/', indexRouter);
app.use('/users', usersRouter);



// app.use('/blood', bloodRouter);

app.listen(process.env.port||3001);