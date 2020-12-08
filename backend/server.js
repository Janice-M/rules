const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This that  Jan server response!');
});

server.listen(process.env.PORT || 3000);