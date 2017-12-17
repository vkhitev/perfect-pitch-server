const intervalStatistics = [{
  name: 'Major 3rd',
  total: 1,
  guessed: 1
}, {
  name: 'Perfect 5th',
  total: 3,
  guessed: 2
}]

exports.postStatistics = function postStatistics (req, res) {
  console.log(req)
  res.send(req.body)
}
