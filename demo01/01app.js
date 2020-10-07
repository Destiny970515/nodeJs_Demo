//01 使用node-http-server快速创建web服务器

// 表示引入 http 模块
var http = require('http');
/**
 * req  获取url传过来的信息
 * res  给浏览器响应信息
 */
http.createServer(function (request, response) {
  // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // 表示给我们页面上面输出一句话并且结束相应
  response.end('Hello World');
}).listen(8081); // 端口

console.log('Server running at http://127.0.0.1:8081/');

