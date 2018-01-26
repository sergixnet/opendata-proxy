const path = require('path')

const indexController = (req, res, next) => {
  const filePath = path.join(path.resolve(), '/src/index.html')
  res.sendFile(filePath)
}

module.exports = indexController
