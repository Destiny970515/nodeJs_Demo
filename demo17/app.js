const http = require('http');
const app = require('./module/routers');
const ejs = require('ejs');
const { MongoClient } = require("mongodb");
const querystring = require('querystring');
const dbUrl = "mongodb://admin:123456@127.0.0.1:27017";
const dbName = 'itying';

// 注册 web 服务器
http.createServer(app).listen(3000);

// 修改默认静态 web 目录
// app.static('public')

// 配置路由
app.get('/', (req, res) => {
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    client.connect((err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('连接数据库成功！！！');
      let db = client.db(dbName);
      
      // 查询数据
      db.collection("user").find({}).toArray((err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("查询成功！");
        // 关闭数据库连接
        client.close();
        ejs.renderFile("./views/index.ejs", {
          list: data
        }, (err, data) => {
          if (err) {
            console.log(err);
            return
          }
          res.send(data);
        });
      })
    })
  })
});

app.get('/register', (req, res) => {
  ejs.renderFile("./views/form.ejs", {}, (err, data) => {
    res.send(data);
  })
})
app.post('/doR', (req, res) => {
  let body = querystring.parse(req.body)
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    let db = client.db(dbName);
    db.collection("user").insertOne(body, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send("增加数据成功");
      // 关闭数据库连接
      client.close();
    });
  });
})