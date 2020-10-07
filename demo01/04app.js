//04 服务器端获取浏览器传递过来的参数
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  // http://127.0.0.1?name=zhangsan&age=20
  /**
   * 设置响应头
   * 状态码是 200，文件类型是 html, 字符集是utf-8
   */
  res.writeHead(200, {"Content-type": "text/html;charset='utf-8"});
  res.write('<head><meta charset="UTF-8"></head>')
  var userInfo = url.parse(req.url, true).query;
  console.log(userInfo);
  console.log(1111);
  res.write(`姓名：${userInfo.name}, 年龄：${userInfo.age}`);
  // console.log(req, res);  
  res.end(); // 结束相应
}).listen(3000);