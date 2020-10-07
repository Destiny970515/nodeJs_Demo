/**
 * 4、fs.appendFile：追加文件
 * 参数
 * path(string)：追加文件的路径
 * data(string | buffer)：要追加的内容
 * callback{function}：回调函数 传递一个异常参数err
 */
const fs = require('fs');

fs.appendFile('./index.text', '我啊啊啊啊', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('追加文件成功');
});