var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
const prompt = require("prompt");

prompt.start();
console.log("CRUD on Doctor database using NodeJS and MongoDB\n");
console.log("1.Insert\n2.Update\n3.Delete\n4.Display\n5.Exit\n");
prompt.get(["choice"], (err, result) => {
    if (err) {
        return onErr(err);
    }
    switch (result.choice) {
        case "1":
            console.log("INSERT");
            prompt.get(["doctor_id", "name", "field", "fees"], (err, result) => {
                if (err) {
                    return onErr(err);
                }
                console.log("Data from user: \n");
                console.log("Doctor Id - " + result.doctor_id);
                console.log("Name - " + result.name);
                console.log("field - " + result.field);
                console.log("fees - " + result.fees);
                MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("Consult");
                    var obj = {
                        doctor_id: result.doctor_id,
                        name: result.name,
                        field: result.field,
                        fees: result.fees,
                    };
                    dbo.collection("Doctor").insertOne(obj, (err, res) => {
                        if (err) throw err;
                        console.log("Inserted 1 Doctor document !! ");
                        db.close();
                    });
                });
            });
            break;
        case "2":
            console.log("UPDATE");
            prompt.get(["doctor_id", "name", "field", "fees"], (err, result) => {
                if (err) {
                    return onErr(err);
                }
                MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("Consult");
                    var query = { doctor_id: result.doctor_id };
                    var upd_val = {
                        $set: {
                            doctor_id: result.doctor_id,
                            name: result.name,
                            field: result.field,
                            fees: result.fees,
                        },
                    };
                    dbo.collection("Doctor").updateOne(query, upd_val, (err, res) => {
                        if (err) throw err;
                        if (res.matchedCount)
                            console.log(res.modifiedCount + " Doctor document Updated!! ");
                        else console.log("Key not Found !! ");
                        db.close();
                    });
                });
            });
            break;
        case "3":
            console.log("DELETE");
            prompt.get(["doctor_id"], (err, result) => {
                if (err) return onErr(err);
                MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("Consult");
                    var query = { doctor_id: result.doctor_id };
                    dbo.collection("Doctor").deleteOne(query, (err, res) => {
                        if (err) throw err;
                        if (res.deletedCount)
                            console.log(res.deletedCount + " Doctor document Deleted!! ");
                        else console.log("Key not Found !! ");
                        db.close();
                    });
                });
            });
            break;
        case "4":
            console.log("VIEW of the Collection\n");
            MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
                if (err) throw err;
                var dbo = db.db("cloth_db");
                dbo
                    .collection("clothes")
                    .find({})
                    .toArray((err, res) => {
                        if (err) throw err;
                        console.log(res);
                        db.close();
                    });
            });
            break;
        default:
            console.log("EXIT");
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}