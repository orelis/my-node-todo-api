const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {
    if(err){
        return console.log('mongo not success to connect');
    }
    console.log('mongo connect!!!');

    const db = client.db('TodoApp');

    // db.collection('TodoApp').insertOne({
    //     text : 'orel israeli',
    //     completed: false
    // }, function (err, res) {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify( res.ops, undefined, 2));
    // })

    db.collection.('TodoApp').find().toArray().then(function(res){
        console.log(JSON.stringify(res) )
    }, function(err) {
        console.log('unable get data', err);
    })

    // client.close();
});
