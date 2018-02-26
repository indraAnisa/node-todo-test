const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{Users} = require('./../server/models/user');

const{ObjectID} = require('mongodb');

var id = '5a924a2272d67b2f981d52d2';

if(!ObjectID.isValid(id)){
    console.log('ID not valid')
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log(todos);
// })

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log(todo);
// })

// Todo.findById(id).then((todos)=>{
//     if(!todos){
//         return console.log("ID not found");
//     }
//     console.log('todo by id ',todos);
// }).catch(e => console.log(e))

Users.findById(id).then((user)=>{
    if(!user){
      return  console.log(user);
    }
    console.log(user)
}).catch(e => console.log('ID not valid'));