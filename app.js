// @ts-check
const express = require('express');
const cors = require('cors');
const session = require('express-session');

const PORT = 4000;
const app = express();

// router import
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const chatRouter = require('./routes/chat');
const mysqlRouter = require('./routes/mysql');

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'maru',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/mysql', mysqlRouter);

// json값이 같은지 확인하는 방법
// const json1 = JSON.stringify(obj1);
// const json2 = JSON.stringify(obj2);
// console.log(json1 === json2);  --> false가 뜸

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동 중입니다!`);
});
