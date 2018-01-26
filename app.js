const express = require('express')
const path = require('path')
const routes = require('./src/app/routes')
const env = 'development'
const projectDir = path.join(__dirname)
const port = process.env.PORT || 3000
const app = express()

app
  .set('env', env)
  .set('port', port)
  .set('projectDir', projectDir)
  .use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next()
  })
  .use(routes)
module.exports = app
