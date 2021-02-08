const mongoose = require('mongoose')

function connectToDB() {
  
  mongoose.connect('mongodb://localhost:27017/node', {useNewUrlParser: true, useUnifiedTopology: true})

  mongoose.connection.once('open', () => {
    console.log('Connected To Database')
  })
}


module.exports = {connectToDB}