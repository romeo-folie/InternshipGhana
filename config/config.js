var env = process.env.NODE_ENV || 'development'

const passValues = () => {
  return Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  })
}

if (env === 'development'){
  var config = require('./config.json');
  var envConfig = config[env]
  passValues()
} else if(env === 'production'){
  // var config = require('./config.json');
  // var envConfig = config[env]
  process.env.MONGODB_URI = process.env.MONGOLAB_URI
}

//"mongodb://localhost:27017/InternshipApp"

// Object.keys(envConfig).forEach((key) => {
//   process.env[key] = envConfig[key]
// });

// ,
// "production": {
//   "MONGODB_URI": "echo ${process.env.MONGOLAB_URI}"
// }
