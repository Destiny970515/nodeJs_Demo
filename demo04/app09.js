/**
 * 9、fs.rmdir：删除目录
 */

const fs = require('fs');

fs.rmdir('./css', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('删除目录成功');
})