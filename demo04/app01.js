/**
 * 1.fs.stat 检测是文件还是目录
 * 参数
 * path       将要检测的目录路径
 * callback   回调函数，传递异常参数err，返回目录信息数据data
 */
const fs = require('fs');

fs.stat('../demo04', function(err, data) {
  console.log(err, data);
  if (err) {
    console.log(err)
  }
  if (data.isFile()) { // data.isFile 检测目标是否为文件
    console.log('目标是文件')
  } else if (data.isDirectory()) { // data.isDirectory 检测目标是否为目录
    console.log('目标是目录')
  }
});
