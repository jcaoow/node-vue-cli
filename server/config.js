let OPENTEST, ENV
const POST = 20026

if (process.env.NODE_ENV === 'uat') {
  OPENTEST = '';
  ENV = 'uat';
} else if (process.env.NODE_ENV === 'pro') {
  OPENTEST = '';
  ENV = 'pro';
} else {
  //test
  OPENTEST = '';
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
  POST
}
