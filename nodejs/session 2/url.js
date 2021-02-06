const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // const file = fs.readFileSync('index.html')
  // res.setHeader('Content-Type', 'text/html')
  // res.end(file);
  
  // req.url

  const urlObj = url.parse(req.url, true) 
  console.log(urlObj)

  if (req.url == '/' || req.url == '/index.html') {
    fs.readFile('index.html', (err, html) => {
      res.end(html)
    })
  } else if (req.url === '/login') {
    fs.readFile('login.html', (err, html) => {
      res.end(html)
    })
  } else {
    const pathName = urlObj.pathname;
    const query = urlObj.query;
    console.log(query)
    if (pathName === '/loginUser') {
      if (query.success === 'true') {
        fs.readFile('index.html', (err, html) => {
          res.end(html)
        })
      } else {
        fs.readFile('login.html', (err, html) => {
          res.end(html)
        })
      }
    }
  }
  
  
  
  
})


const port = 3030
app.on('listening', () => console.log('Run On Port '+ port))
app.listen(port)