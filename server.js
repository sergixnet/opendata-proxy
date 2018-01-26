const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const port = app.get('port')

server.listen(
  port,
  () => console.log(`Server is runing on port: ${port}`)
)
