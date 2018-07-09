const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {
    if(err){
        return console.log('mongo not success to connect');
    }
    console.log('mongo connect!!!');
    const db = client.db('TodoApp');



    db.collection('TodoApp').findOneAndUpdate({
        _id: new ObjectID('5b3f7b6136a06162337be413')
    },{
        $set: {
            text: 'shimhon'
        }
    },{
            returnOriginal: false
    }).then(function (result) {
        console.log(result);
    })
    
    // client.close();
});

