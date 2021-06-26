const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 7001);

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;

  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포토에서 대기중');
});
