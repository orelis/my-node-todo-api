const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {
    if(err){
        return console.log('mongo not success to connect');
    }
    console.log('mongo connect!!!');

    const db = client.db('TodoApp');


    db.collection('TodoApp').find({
       _id: new ObjectID('5b37ef9d56a7db3422856665')
    }).toArray().then(function(res){
        console.log(JSON.stringify(res, undefined, 4) )
    }, function(err) {
        console.log('unable get data', err);
    })

    // client.close();
});
