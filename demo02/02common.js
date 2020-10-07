const axios = require('axios');

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  axios.get();
  axios.post();
  console.log(axios);
  response.end();
}).listen(3000);
