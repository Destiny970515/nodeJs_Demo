// 管道流

const fs = require('fs');

var readStream = fs.createReadStream('./timg.jfif');
var writeStream = fs.createWriteStream('./data/img.jfif');

// pipe 形成管道流
readStream.pipe(writeStream);
