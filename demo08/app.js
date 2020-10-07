const http = require('http');
const fs = require('fs');
const common = require('./module/common');
const path = require('path');
http.createServer(function (req, res) {
  // 1、获取网站地址
  let pathName = req.url;
  console.log(pathName)
  // 2、获取后缀名
  let extname = path.extname(pathName);
  pathName = pathName === '/' ? '/index.html' : pathName;
  if (pathName !== '/favicon.ico') {
    let mine = common.getMime(extname);
    console.log(mine);
    fs.readFile('./static' + pathName, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': mine + ';charset="utf-8"'});
        res.end('404');
      }
      res.writeHead(200, {'Content-Type': mine + ';charset="utf-8"'});
      res.end(data);
    }) 
  }
}).listen(3000);
