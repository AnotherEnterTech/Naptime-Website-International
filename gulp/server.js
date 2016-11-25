const http = require('http');
const st = require('st');

// create a static server.
const server = (dir = __dirname) => {
    http.createServer(
        st({
            path: dir,
            index: 'index.html',
            cache: false
        })
    ).listen(8080);
};

module.exports = server;