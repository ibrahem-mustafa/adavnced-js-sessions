// RES => JSON (STRING)
// JSON.stringify(data) => JSON (OBJECT) => STRING
// REQ => JSON (OBJECT)
// JSON.parse(data |JSON AS STRING| ) => STRING => JSON (OBJECT)

const http = require('http');
const fs = require('fs');

// REQUEST => Send Data To Server || Send A Request To Get Data
// res => Receive Data From Server (Send Data From Server To Client)

// application/json
// text/html

const app = http.createServer((req, res) => {
  const data = {
    name: 'ahmed',
    id:1,
    age: 30
  }

  if(req.url === '/' || req.url === '/index.html') {
    fs.readFile("index.html", (error, html) => {
      res.end(html);
    });
  } else if(req.url === '/play.js') {
    fs.readFile("play.js", (error, js) => {
      res.end(js);
    });
  }
 
})


app.on('listening', () => console.log('Server Started On Port 8020'))

app.listen(8020)