const {response} = require("express")
const express = require ("express");
const cors = require("cors");
const app = express ();

app.use(cors());

app.get("/",(req, res)=>{
    res.json({data: ["Umer", "Khizar", "helloooo every one","Umer", "Khizar", "helloooo every one"]});

});
app.get("/emp" , (req, res) =>{
    res.json({data: ["Umer", "Khizar", "helloooo every one"]});
});
app.get("/dept", (req, res) =>{
    res.send("I am from department");
})




 if (app.listen (5000)){
     console.log("Connected to localhost:5000");
 }