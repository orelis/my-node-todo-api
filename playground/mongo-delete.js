const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {
    if(err){
        return console.log('mongo not success to connect');
    }
    console.log('mongo connect!!!');
    const db = client.db('TodoApp');

    // db.collection('TodoApp').deleteMany({name: 'person'}, function(err, obj) {
    //     console.log('obj',obj);
    //     console.log('err',err);
    // });

    // db.collection('TodoApp').deleteOne({text: 'orel israeli'}, function (obj) {
    //     console.log(obj);
    // })

    db.collection('TodoApp').findOneAndDelete({_id: new ObjectID("5b364fac5feb7229ca3e2bd4")}, function (result) {
        console.log(result);
    } )
    
    // client.close();
});

