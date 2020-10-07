const fs = require('fs');
var str = '';

for (var i = 0; i < 500; i++) {
  str += '哈哈哈哈哈，大傻逼！\n'
}

var writeStream = fs.createWriteStream('./data/output.txt');

writeStream.write(str);
// 标记写入完成
writeStream.end();
// 如果要监听写入完成的状态，一定要执行 writeStream.end();
writeStream.on('finish', () => {
  console.log('写入完成');
});