/**
 * 6、fs.readdir：读取目录
 */
const fs = require('fs');

fs.readdir('../demo04', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('读取目录成功！');
  console.log(data);
})