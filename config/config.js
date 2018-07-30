var env = process.env.NODE_ENV || 'development'

if (env === 'development'){
  var config = require('./config.json');
  var envConfig = config[env]
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  })
} else if(env === 'production'){
  process.env.MONGODB_URI = process.env.MONGOLAB_URI
}
