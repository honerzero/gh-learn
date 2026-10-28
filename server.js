const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('gh-learn ready\n');
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
