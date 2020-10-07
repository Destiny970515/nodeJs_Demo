const http = require('http');
const routes = require('./module/routes');
const url = require('url');
http.createServer(function (req, res) {
  // 创建静态web服务
  routes.static(req, res, 'static');

  // 路由
  let pathName = url.parse(req.url).pathname;
  if (pathName === '/login') {
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行登录");
  } else if (pathName === '/register') {
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行注册");
  } else {
    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("该页面无法访问");
  }
  
}).listen(3000);
