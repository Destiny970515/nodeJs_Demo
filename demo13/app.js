const http = require('http');
const app = require('./module/routers');

http.createServer(app).listen(3000);

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  res.end('首页');
});
app.get('/news', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  res.end('news');
});
app.get('/register', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  res.end('register');
});

