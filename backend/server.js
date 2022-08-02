const express = require('express')
const fs = require('fs')
const multer = require("multer")
const moment = require('moment')

const app = express()
const host = '127.0.0.1'
const port = 1433


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let year = moment().year();
    let month = moment().month() + 1;
    let dirsuf = year + '/' + month
    if (req.url.includes('setu')) {
      if (!__dirname + '/setu/' + dirsuf) fs.mkdir(__dirname + '/setu/' + dirsuf, { recursive: true }, () => {
        cb(null, __dirname + '/setu/' + dirsuf);
      })

    } else if (req.url.includes('diaotu')) {
      cb(null, __dirname + '/diaotu/' + dirsuf)
    }

  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split('.');
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
const upload = multer({ storage: storage })

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //当允许携带cookies此处的白名单不能写’*’
  res.header('Access-Control-Allow-Headers', 'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
  //res.header('Access-Control-Allow-Credentials',true);  //允许携带cookies
  next();
});

app.get('/', (req, res) => {
  res.send('hello')
})

// image upload
app.post('/uploadsetu', upload.array('photos'), (req, res) => {
  console.log('收到色图')
  res.send()
})

app.post('/uploaddiaotu', upload.array('photos'), (req, res) => {
  console.log('收到吊图')
  res.send('diaotu')
})

app.listen(port, host, () => {
  console.log(`server running on  ${host + ':' + port}`)
})