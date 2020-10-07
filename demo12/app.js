const http = require('http');
const routes = require('./module/routes');
const url = require('url');

http.createServer(function (req, res) {
  // 创建静态web服务
  routes.static(req, res, 'static');

  // 路由
  let pathName = url.parse(req.url).pathname.replace('/', "");
  
  console.log(pathName);

  try {
    routes[pathName](req, res);
  } catch(error) {
    routes['error'](req, res);
  }
  
}).listen(3000);
