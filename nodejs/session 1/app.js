// NAVIGATION THROUGH TERMINAL
// [cd] MAIN KEYWORD
// [./] MOVE FORWARD
// [./folderName] MOVE TO FOLDER NAME
// [../] MOVE BACKWARD 1 STEP
// [../../] MOVE BACKWARD 2 STEP
// [ls] KEYWORD TO GET THE CURRENT FOLDER FILES & NESTED FOLDERS

// const http = require('http');
// const url = require('url');
// const fs = require('fs');
const {
  Log,
  LogError,
  LogWarn
} = require('./myModule.js')

Log('This Is Logger')
LogError('This Is LogError')
LogWarn('This Is LogWarn');
// const app = http.createServer((req, res) => {
//   const query = url.parse(req.url, true).query;
//   const file = fs.readFileSync('index.html')
//   res.setHeader('Content-Type', 'text/html')
//   res.end(file);
// })

// app.on('listening', () => console.log('Listening On Post 8080'))
// app.listen(8080)