const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const mongoose=require("mongoose");
const port=process.env.PORT||3000;
require("./db/conn");

const Register=require("./models/registers");


app.set("view engine","hbs");
const static_path=path.join(__dirname,"../public");
const partials_path=path.join(__dirname,"../views/partials");
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    res.render('index');
    
});

app.get("/about",(req,res)=>{
    res.send("About Page");
});
app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register', async(req,res)=>{
        let data=new Register({
            firstname:req.body.first,
            lastname:req.body.last,
            age:req.body.age,
            email:req.body.email1
        });
        data.save();
        return res.redirect('/');
});

app.listen(port,()=>{
    console.log(`Running on port no ${port}`);
});