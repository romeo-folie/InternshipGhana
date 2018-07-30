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
  var config = require('./config.json');
  var envConfig = config[env]
  passValues()
}

//"mongodb://localhost:27017/InternshipApp"

// Object.keys(envConfig).forEach((key) => {
//   process.env[key] = envConfig[key]
// });
