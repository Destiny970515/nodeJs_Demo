//02 使用 http 模块手动创建web服务
const http = require('http');
http.createServer((req, res) => {
  console.log(req.url); // 获取url
  /**
   * 设置响应头
   * 状态码是 200，文件类型是 html, 字符集是utf-8
   */
  res.writeHead(200, {"Content-type": "text/html;charset='utf-8"});
  res.write('<head> <meta charset="UTF-8"> </head>');
  res.write('<h2>你好, nodeJS</h2>');

  res.end(); // 结束响应
}).listen(3000);