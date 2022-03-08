const mongoose = require("mongoose");

const ConnectDb = async () => {
    /*add 'mongo' to hosts file*/
    // const uri = "mongodb://mongo:27017/user-app";
    // const uri = "mongodb+srv://chamath:Kumar_123@cluster0.yz9ib.mongodb.net/user-app";
    const mode = 'develop'
    const uri = mode === 'production' ? 'mongodb://mongodb-rec:KedbyBy8z1O3CZvIRSEa2wuCHQHp295vlSmo40c24OLqautqXEKpFIcJ1T6TGmYZccct0uiM0M63aWVa3crFyA==@mongodb-rec.mongo.cosmos.azure.com:10255/user-app?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodb-rec@' : 'mongodb://mongo:27017/user-app'

    try{
        mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
        const connection = await mongoose.connection;
        connection.on("error", console.error.bind(console, "connection error: "));
        connection.once("open", function() {
        console.log("MongoDB database connection established successfully");
    });
    }
    catch(error){
        return error
    }
}

module.exports = {ConnectDb}