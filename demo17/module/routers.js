const url = require('url');
const fs = require('fs');
const path = require('path');

// 拓展res
function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end(data);
  }
}
// 根据后缀名获取文件类型
function getFileMime(extname) {
  // readFileSync同步方法
  let data = fs.readFileSync('./data/mime.json')
  let mime = JSON.parse(data.toString());
  return mime[extname];
}

// 静态web服务的方法
function initStatic(req, res, staticPath) {
  // 1、获取网站地址
  let pathName = url.parse(req.url).pathname;
  pathName = pathName === '/' ? '/index.html' : pathName;
  // 2、获取后缀名
  let extname = path.extname(pathName);
  // 3、通过fs模块读取文件 readFileSync同步方法
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

let server = () => {
  let G = {
    _get: {},
    _post: {},
    staticPath: 'static' // 默认静态目录
  };

  let app = function(req, res) {
    // 拓展 res 方法
    changeRes(res);

    // 配置静态web服务
    // initStatic(req, res, G.staticPath);

    const pathName = url.parse(req.url).pathname;
    let method = req.method.toLowerCase();
    if (G['_' + method][pathName]) {
      if (method === 'get') {
        G['_' + method][pathName](req, res);
      } else if (method === 'post') {
        let postData = "";
        req.on('data', (chunk) => {
          postData += chunk;
        });
        req.on('end', () => {
          req.body = postData;
          G['_' + method][pathName](req, res);
        });
      }
    } else {
      res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('页面不存在');
    }
  }
  
  //配置get
  app.get = function(path, callback) {
    G._get[path] = callback;
  }

  //配置post
  app.post = function(path, callback) {
    G._post[path] = callback;
  }
  
  app.static = function(staticPath) {
    G.staticPath = staticPath;
  }

  return app;
}
module.exports = server();