/**
 * 8、fs.unlink：删除文件
 */
const fs = require('fs');

fs.unlink('./css/html.text', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('删除文件成功');
})