const http = require('http');
const fs = require('fs');
const common = require('./module/common');
const path = require('path');
http.createServer(function (req, res) {
  // 1、获取网站地址
  let pathName = req.url;
  // 2、获取后缀名
  pathName = pathName === '/' ? '/index.html' : pathName;
  let extname = path.extname(pathName);
  if (pathName !== '/favicon.ico') {
    let mine = common.getFileMime(extname);
    fs.readFile('./static' + pathName, async (err, data) => {
      let mineStr = await mine;
      if (err) {
        res.writeHead(404, {'Content-Type': mineStr + ';charset="utf-8"'});
        res.end('404');
      }
      res.writeHead(200, {'Content-Type': mineStr + ';charset="utf-8"'});
      res.end(data);
    }) 
  }
}).listen(3000);
