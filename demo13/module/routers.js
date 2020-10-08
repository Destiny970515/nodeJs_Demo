const url = require('url');

let G = {};

let app = function(req, res) {
  const pathName = url.parse(req.url).pathname;
  if (G[pathName]) {
    G[pathName](req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('页面不存在');
  }
}
app.get = function(path, callback) {
  G[path] = callback;
}

module.exports = app;