const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

let getFileMime = function(extname) {
  // readFileSync同步方法
  let data = fs.readFileSync('./data/mime.json')
  let mime = JSON.parse(data.toString());
  return mime[extname];
}

let app = {
  static:(req, res, staticPath) => {
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
  },
  login: (req, res) => {
    let query = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("get传值获取成功！！");
  },
  news: (req, res) => {
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
  },
  register: (req, res) => {
    // post
    ejs.renderFile('./views/register.ejs', {}, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    });
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行注册");
  },
  toreg: (req, res) => {
    // 获取post传值
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      console.log(postData);
      res.end(postData);
    });
  },
  error: (req, res) => {
    res.end('error');
  }
}

module.exports = app;