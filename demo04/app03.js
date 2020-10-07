/**
 * 3、fs.writeFile：创建写入文件
 * 参数
 * path(string)：想要写入文件的文件路径
 * data(string | Buffer)：将要写入的内容
 * options(object)：option数组对象
 * . encoding(string)：可选值，默认‘utf-8’，当data使用buffer时，该值应该为 ignored。
 * . mode(number)：文件读写权限，默认值 438
 * . flag(string)：默认值‘w’
 * callback {function}：回调函数，传递一个异常参数err
 */
const fs = require('fs');
fs.writeFile('./index.text', '哈哈哈哈', (err, a) => {
  console.log(err);
  if (err) {
    console.log(err)
  }
  console.log('创建写入文件成功');
});