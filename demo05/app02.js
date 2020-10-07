const fs = require('fs');

var path = './wwwroot';
async function isDir(path) {
  return new Promise((res, rej) => {
    fs.stat(path, (err, data) => {
      if (err) { 
        console.log(err) 
        return rej(err);
      }
      if (data.isDirectory()) {
        res(true)
      } else {
        res(false);
      }
    });
  });
}
function getDir() {
  var arr = [];
  fs.readdir(path, async (err, data) => {
    let datalength = data.length;
    if (err) { console.log(err) }
    for (let i = 0; i < datalength; i++) {
      if (await isDir(path + '/' + data[i])) {
        arr.push(data[i]);
      }
    }
    console.log(arr);
  });
}
getDir()



// async function findDir() {
//   fs.readdir('./wwwroot', (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data);
//     var dlength = data.length;
//     for (let i = 0; i < dlength; i++) {
//       fs.stat('./wwwroot/' + data[i], (err, status) => {
//         if (err) { console.log(err) }
//         if (status.isDirectory()) {
//           console.log(data[i]);
//           return Promise.resolve(data[i]);
//         }
//       });
//     }
//   });
// }
// async function getDir() {
//   var val = await findDir();
//   console.log(val);
// }
// getDir();

