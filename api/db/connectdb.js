const mongoose = require("mongoose");

const ConnectDb = async () => {
    const uri = "mongodb://mongo:27017/user-app";
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