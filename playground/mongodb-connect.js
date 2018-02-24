
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/', (err, client)=>{
    if(err){
      return  console.log('unable to connect mongodb server',err);
    }

    console.log("Connected to mongodb server");

    var db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:"Something to do",
    //     completed:false
    // },(err,res)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));
    // })

    // db.collection('Users').insertOne({
    //     name:'indra',
    //     age:32,
    //     location:'jakarta'
    // },(err,res)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // })

    client.close();
});

