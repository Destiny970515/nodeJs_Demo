const url = require('url');

function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end(data);
  }
}

let server = () => {
  let G = {};

  G._get = {};
  G._post = {};

  let app = function(req, res) {
    // 拓展 res 方法
    changeRes(res);
    const pathName = url.parse(req.url).pathname;
    let method = req.method.toLowerCase();
    console.log(method);
    if (G['_' + method][pathName]) {
      if (method === 'get') {
        G['_' + method][pathName](req, res);
      } else if (method === 'post') {
        let postData = "";
        req.on('data', (chunk) => {
          postData += chunk;
        });
        req.on('end', () => {
          res.end(postData);
          req.body = postData;
          G['_' + method][pathName](req, res);
        });
      }
    } else {
      res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('页面不存在');
    }
  }
  
  app.get = function(path, callback) {
    G._get[path] = callback;
  }

  app.post = function(path, callback) {
    G._post[path] = callback;
  }
  
  return app;
}
module.exports = server();