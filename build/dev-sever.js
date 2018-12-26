var proxyMiddleware = require('http-proxy-middleware')
var server = express()

server.middleware = [
  proxyMiddleware(['/token'], {target: 'http://is.airdesign.com.tw/connect', changeOrigin: true})
];

server.use(server.middleware);