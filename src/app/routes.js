const indexController = require('./index-controller')
const urlController = require('./url-controller')
const express = require('express')
const routes = express.Router()

routes
  .get('/', indexController)
  .get('/opendata/:url', urlController)

module.exports = routes
