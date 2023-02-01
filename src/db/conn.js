const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://<username>:<password>@newcluster.x7pym8i.mongodb.net/<databasename>").then(()=>{
    console.log("Connection successful!");
}).catch((e)=>{
    console.log(e);
});

