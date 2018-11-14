var proxyMiddleware = require('http-proxy-middleware')
var server = express()

server.middleware = [
  proxyMiddleware(['/IngredientsCategory/Get'], {target: 'http://demo.airdesign.com.tw/POSAPI/api', changeOrigin: true})
];

server.use(server.middleware);