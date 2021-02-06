const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // const file = fs.readFileSync('index.html')
  // res.setHeader('Content-Type', 'text/html')
  // res.end(file);
  
  // req.url


  
  
  
  // const redFile = fs.readFile('indexx.html', (error, file) => {
  //   console.log(error)
  //   console.log(file)

  //   if (error) {
  //     console.log('Error')
  //     res.write('404')
  //     res.end()
  //   } else {
  //     res.end(file)
  //   }
  // })


  // const filename ='indexx.html'
  // try {
  //   const file = fs.readFileSync(filename)
  //   res.end(file);
  // } catch(err) {
  //   fs.writeFileSync('logs/error.txt', 'Could Not Find File: ' + filename + ' | Code File app.js | Line 35')
  //   res.write('404')
  //   res.end()
  // }

  function writeFile(name, data) {
    return fs.writeFileSync(name, data)
  }
  // const filename ='indexx.html'
  // try {
  //   fs.mkdirSync('uploads')
  //   writeFile('uploads/test.txt', 'test')
  // } catch(err) {
    
  //   res.write('404')
  //   res.end()
  // }

  const folderExist = fs.existsSync('uploads')

  if (folderExist) {
    writeFile('uploads/test.txt', 'test')
  } else {
    fs.mkdirSync('uploads')
    writeFile('uploads/test.txt', 'test')
  }

  res.end(folderExist.toString())


  



  

  
  
  
})


const port = 3030
app.on('listening', () => console.log('Run On Port '+ port))
app.listen(port)