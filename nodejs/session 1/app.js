// RES => JSON (STRING)
// JSON.stringify(data) => JSON (OBJECT) => STRING
// REQ => JSON (OBJECT)
// JSON.parse(data |JSON AS STRING| ) => STRING => JSON (OBJECT)

const http = require('http');
const fs = require('fs');

// REQUEST => Send Data To Server || Send A Request To Get Data
// RESPONSE => Receive Data From Server (Send Data From Server To Client)

// application/json
// text/html

const app = http.createServer((req, res) => {
  const data = {
    name: 'ahmed',
    id:1,
    age: 30
  }

  
  res.setHeader('Content-Type', 'text/html')
  const index = fs.readFileSync('index.html')
  res.write(index)
  res.end()
})


app.on('listening', () => console.log('Server Started On Port 8080'))

app.listen(8080)