const fs = require('fs');

fs.stat('./upload',(err, data) => {
  if (err) {
    console.log(err);
    fs.mkdir('./upload', (err) => {
      if (err) { console.log(err) }
    });
    return;
  }
  
  console.log(data.isDirectory());
  console.log(1);

  // if (err) {
  //   console.log(err);
  //   fs.mkdir('./upload', (err) => {
  //     if (err) { console.log(err) }
  //   });
  // }
  // console.log(data);
  // if (data.isDirectory()) {
  //   return false
  // } else {
  //   fs.mkdir('./upload', (err) => {
  //     if (err) { console.log(err) }
  //   });
  // }
  // console.log(data);
})