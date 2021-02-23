const mongoose = require('mongoose')

function connectToDB() {

  const dev = false;
  const remoteUrl =
    "mongodb+srv://monyflow:monyflow@cluster0.tuvke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
  mongoose.connect( dev? 'mongodb://localhost:27017/node' : remoteUrl, {useNewUrlParser: true, useUnifiedTopology: true})

  mongoose.connection.once('open', () => {
    console.log('Connected To Database')
  })
}


module.exports = {connectToDB}