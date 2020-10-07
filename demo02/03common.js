const router = require('router');

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  router.createRouter('home', 'https://baidu.com/home');
  router.deleteRouter('404', 'https://baidu.com/404');
  response.end();
}).listen(3000);
