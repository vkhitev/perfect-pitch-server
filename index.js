const restify = require('restify')

const { exercises } = require('./data.js')

const server = restify.createServer()

server.get('/exercises', (req, res, next) => {
  res.send(200, exercises)
})

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})
