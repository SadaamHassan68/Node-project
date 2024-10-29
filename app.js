const { log } = require('console');
const http = require('http');
const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')) {
        // TODO: Implement this method to handle /tasks
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Tasks endpoint hit' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'PAGE NOT FOUND' }));
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
