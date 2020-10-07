const fs = require('fs');
const path = require('path');
const url = require('url');

let getFileMime = function(extname) {
  // readFileSync同步方法
  let data = fs.readFileSync('./data/mime.json')
  let mime = JSON.parse(data.toString());
  return mime[extname];
}

exports.static = function(req, res, staticPath) {
  // 1、获取网站地址
  let pathName = url.parse(req.url).pathname;
  pathName = pathName === '/' ? '/index.html' : pathName;
  // 2、获取后缀名
  let extname = path.extname(pathName);
  // 3、通过fs模块读取文件 readFileSync同步方法
  if (pathName !== '/favicon.ico') {
    try {
      let data = fs.readFileSync('./' + staticPath + pathName);
      if (data) {
        let mine = getFileMime(extname);
        res.writeHead(200, {'Content-Type': mine + ';charset="utf-8"'});
        res.end(data);
      }
    } catch(error) {
      console.log(error);
    }
  }
}