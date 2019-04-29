let OPENTEST, ENV
const PORT = 20026

if (process.env.NODE_ENV === 'uat') {
  OPENTEST = 'http://proxyOrigin';
  ENV = 'uat';
} else if (process.env.NODE_ENV === 'pro') {
  OPENTEST = 'http://proxyOrigin';
  ENV = 'pro';
} else {
  //test
  OPENTEST = 'http://proxyOrigin';
  ENV = 'test';
}

console.log(process.env.NODE_ENV)

const proxyTable = {
  '/api': {
    target: OPENTEST,
    changeOrigin: true,
    logLevel: 'debug',
  }
};

module.exports = {
  proxyTable,
  ENV,
  PORT
}
