const http = require('http');
const tools = require("./module/tools")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var api = tools.formatApi('api/plist');
  res.write(api);
  res.end();
}).listen(3000);

// console.log('Server running at http://127.0.0.1:8081/');