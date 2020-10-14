// 引入MongoDB
const { MongoClient } = require("mongodb");
// 定义数据库连接的地址 
// const dbUrl = "mongodb://127.0.0.1:27017";
// 如果数据库定义了权限，要加上用户名和密码 <username>:<password>
const dbUrl = "mongodb://admin:123456@127.0.0.1:27017";
// 定义要操作的数据库
const dbName = 'itying';
// 实例化 MongoClient 传入数据库连接地址
const client = new MongoClient(dbUrl, { useUnifiedTopology: true });
// 连接数据库
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('数据库连接成功');
  // 切换到当前数据库
  let db = client.db(dbName);

  // 1、查找数据
  // db.collection("user").find({"age": 10}).toArray((err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(data);
  //   // 操作数据库完毕以后 一定要关闭数据库连接
  //   client.close();
  // })

  // 2、增加数据
  // db.collection("user").insertOne({"username": "小明", "age": 31}, (err, result) => {
  //   if (err) {
  //     console.log(err)
  //     return;
  //   }
  //   console.log("增加成功");
  //   console.log(result);
  //   // 操作数据库完毕以后 一定要关闭数据库连接
  //   client.close();
  // })

  // 3、修改数据
  // db.collection("user").updateOne({"username": "小明"}, {$set: {"age": 21}}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log('修改成功');
  //   console.log(result);
  //   // 操作数据库完毕以后 一定要关闭数据库连接
  //   client.close();
  // })
  
  // 4、删除数据
  // db.collection("user").deleteOne({"username": "小明"}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("删除成功");
  //   console.log(result);
  //   //   // 操作数据库完毕以后 一定要关闭数据库连接
  //   client.close
  // })
});
