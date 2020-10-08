const http = require('http');
const app = require('./module/routers');
const ejs = require('ejs');

http.createServer(app).listen(3000);

app.static('public')

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  res.send('首页');
});
app.get('/news', (req, res) => {
  ejs.renderFile('./views/form.ejs', {}, (err, data) => {
    res.send(data);
  })
});
app.post('/news', (req, res) => {
  // console.log(req.body);
  res.send(req.body);
});

