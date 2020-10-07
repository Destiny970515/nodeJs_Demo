const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');
http.createServer(function (req, res) {
  // 创建静态web服务
  routes.static(req, res, 'static');

  // 路由
  let pathName = url.parse(req.url).pathname;

  // 获取请求类型
  console.log(req.method);
  if (pathName === '/news') {
    let msg = "数据库里面的数据获取";
    let list = [
      { title: '新闻'},
      { title: '游戏'},
      { title: '体育'}
    ]
    // 拿到数据 进行前端数据渲染
    ejs.renderFile('./views/news.ejs', {msg: msg, list: list}, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    });
  } else if (pathName === '/login') {
    // get 
    let query = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("get传值获取成功！！");
  } else if (pathName === '/register') {
    // post
    ejs.renderFile('./views/register.ejs', {}, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    });
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行注册");
  } else if (pathName === '/toreg') {
    // 获取post传值
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      console.log(postData);
      res.end(postData);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("该页面无法访问");
  }
  
}).listen(3000);
