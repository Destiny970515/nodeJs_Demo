/*
 * 2、fs.mkdir： 创建目录 
 * 参数
 * path       将要创建的目录路径
 * mode       目录权限（读写权限），默认777，可不传
 * callback   回调函数，传递异常参数err 
*/
const fs = require('fs');

fs.mkdir('./css', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('创建成功');
});
