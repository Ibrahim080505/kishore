import express from "express";
import AuthRoutes from "./route/routes.js";
import mongoose from "mongoose";
const app = express();
import bodyParser from "body-parser";
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://ibrahim080505:ibrahim@cluster0.egqymhf.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0",
{useNewUrlParser: true, useUnifiedTopology:true}
).then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    console.log(err.message);
});

app.get('/',(req,res)=>{
    res.send("Welcome to server")
});



app.use("/",AuthRoutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});