var express = require('express')
var app = express()
var founders = require('./founders.js')
var houses = require('./houses.js')
var members = require('./members.js')

app.get('/founders', getFounders);
app.get('/founders/:index', getFounderIndex, founderIndexShow);
app.delete('/founders/:index', getFounderIndex, founderIndexDelete);
app.get('/houses', getHouses);
app.get('/houses/:index', getHouseIndex, houseIndexShow);
app.delete('/houses/:index', getHouseIndex, houseIndexDelete);
app.get('/members', getMembers)
app.get('/members/:index', getMemberIndex, memberIndexShow);
app.delete('/members/:index', getMemberIndex, memberIndexDelete);

app.listen(3000, listenHandler)

function getFounders(req, res) {
  res.json(founders);
}

function getFounderIndex(req, res, next) {
  var index = req.params.index;
  var founder = founders[index];
  req.founder = founder;
  next();
}

function founderIndexShow(req, res) {
  res.json(req.founder);
}

function founderIndexDelete(req, res) {
  founders.splice(req.params.index, 1);
  res.json(req.founder);
}
///=====

function getHouses(req, res) {
  res.json(houses);
}

function getHouseIndex(req, res, next) {
  var index = req.params.index;
  var house = houses[index];
  req.house = house;
  next();
}

function houseIndexShow(req, res) {
  res.json(req.house);
}

function houseIndexDelete(req, res) {
  houses.splice(req.params.index, 1);
  res.json(req.house);
}

//////////////////////////////////////////

function getMembers(req, res) {
  res.json(members);
}

function getMemberIndex(req, res, next) {
  var index = req.params.index;
  var member = members[index];
  req.member = member;
  next();
}

function memberIndexShow(req, res) {
  res.json(req.member);
}

function memberIndexDelete(req, res) {
  members.splice(req.params.index, 1);
  res.json(req.member);
}

///////////////////////////

function listenHandler() {
  console.log(`Listening on localhost:3000`);
}
