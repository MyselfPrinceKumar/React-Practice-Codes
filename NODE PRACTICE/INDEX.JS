const http = require('http');
const data = require('./data');

const server = http.createServer((req, resp) => {
    resp.writeHead('200', { 'content-type': 'application\json' })
    resp.write(JSON.stringify(data[4][0].State));
    resp.end();
}).listen(5000);
console.log('Server Started');