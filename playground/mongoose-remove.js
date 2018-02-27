const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{Users} = require('./../server/models/user');

const{ObjectID} = require('mongodb');

console.log( Todo.findByIdAndRemove('5a94df73648a7319e4ad23cc'));