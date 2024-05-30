const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001; // Choose any available port number

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
