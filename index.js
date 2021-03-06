const restify = require('restify')

const { exercises } = require('./data.js')

const server = restify.createServer()

server.get('/', (req, res, next) => {
  res.send(200, 'Hello, this is a Perfect Pitch server.')
})

server.get('/exercises', (req, res, next) => {
  res.send(200, exercises)
})

server.listen(process.env.PORT || 3000, function () {
  console.log('%s listening at %s', server.name, server.url)
})
