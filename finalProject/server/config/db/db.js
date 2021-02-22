const mongoose = require("mongoose");
function connectToDB() {
    mongoose.connect("mongodb://localhost:27017/monyFlow", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(result=> console.log('Connected To Database'));
    
}

module.exports = {connectToDB}
