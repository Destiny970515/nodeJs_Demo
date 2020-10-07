/**
 * 5、fs.readFile：读取文件
 * 参数
 * path(string)：将要读取文件的路径
 * callback{function}：回调函数，传递一个异常参数err，一个返回的数据data
 */
const fs = require('fs');

fs.readFile('./index.text', (err, data) => {
  if (err) {
    console.log(err);
  }
  // 返回的16进制buffer 通过toString()方法转换为string类型
  console.log(data.toString()); 
  console.log('读取成功！');
})