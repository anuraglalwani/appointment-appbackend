const express= require("express");
const mongoose= require("mongoose");
const cors=require("cors");
require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());

var mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.once("open",()=>{
    console.log("connected to mongodb")
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const appointmentRouter=require("./routes/appointment");
app.use("/",appointmentRouter);



// let port =process.env.PORT
// if(port===null|| port===""){
//     port=5000;
// }

app.listen(5000,function(){
    console.log("Server started at port ");
});