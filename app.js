var express = require('express')
var app = express()
var founders = require('./founders.js')
// var houses = require('./houses.js')
// var members = require('./members.js')

app.get('/founders', getFounders)
app.get('/founders/:index', getFounderIndex, founderIndexShow)
app.delete('/founders/:index', getFounderIndex, founderIndexDelete)
// app.get('/houses', getHouses)
// app.get('/houses/:index', getHouseOne)
// app.get('/members', getMembers)
// app.get('/members/:index', getMemberOne)
app.listen(3000, listenHandler)

function getFounders(req, res) {
  res.json(founders)
}

function getFounderIndex(req, res, next) {
  var index = req.params.index
  var founder = founders[index]
  req.founder = founder
  next()
}

function founderIndexShow(req, res) {
  res.json(req.founder)
}

function founderIndexDelete(req, res) {
  founders.splice(req.params.index, 1)
  res.json(req.founder)
}


function listenHandler() {
  console.log(`Listening on localhost:3000`);
}
