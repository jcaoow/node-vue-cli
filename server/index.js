const express = require('express');
const proxy = require('http-proxy-middleware');
const { proxyTable, PORT } = require('./config');
const path = require('path');
const axios = require('axios')

const app = express()

Object.keys(proxyTable).forEach(context => {
  const options = proxyTable[context];
  app.use(context, proxy(options));
});

app.get('/node/*', (req, res) => {
  const path = req.path
  // 接口返回
  res.send('12331')
  // 接口转发
  axios.get(`http://127.0.0.1:${PORT}${path.replace('/node', '')}`, req.query).then(r => {
    r.data = {
      code: 1
    }
    res.send(r.data)
  }).catch(err => {
    console.log(err)
  })
})

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, function() {
  console.log(`app run at: ${PORT}`);
});
