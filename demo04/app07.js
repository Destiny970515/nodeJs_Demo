/**
 * 7、fs.rename：重命名
 * 功能
 * 1、表示重命名
 * 2、表示移动文件
 */
const fs = require('fs');
// 1
fs.rename('./css/index.css', './css/html.text', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('重命名成功！');
})

// 2
// fs.rename('./index.text', './css/index.css', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('重命名成功，且移动到该指定目录中！');
// })
