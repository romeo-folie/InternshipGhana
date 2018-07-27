var env = process.env.NODE_ENV || 'development'

if (env === 'development'){
  var config = require('./config.json');
  var envConfig = config[env]
  //for each of the keys inside the envConfig object process.env.key is the value of the envConfig object's value for that same key
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  });
}

//"mongodb://localhost:27017/InternshipApp"
