const mongoose = require('mongoose');

//set up to use promises
mongoose.Promise = global.Promise;
//connect to database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
  mongoose,
};
