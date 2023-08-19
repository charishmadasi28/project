import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/pbstatement/:about/:matter',async(req,res)=>
{
    const details=await db.collection('richi').insertOne({About:req.params.about,Matter:req.params.matter})
    res.json(details);
})
app.get('/pso',async(req,res)=>
{
    const details=await db.collection('richi').find().toArray();
    res.json(details);
})
app.post('/signup1/:name/:mail',async(req,res)=>
{
    const details=await db.collection('Hello').findOne({Name:req.params.name,Mail:req.params.mail})
    
    res.json(details);
})
app.post('/fpass/:mail/:newpassword',async (req,res)=>{
  
    const details = await db.collection('Hello').findOneAndUpdate({Mail:req.params.mail},{$set:{password:req.params.newpassword}})
    res.json(details);
})
app.post('/signup/:name/:mail/:number/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('Hello').insertOne({Name:req.params.name,Mail:req.params.mail,number:req.params.number,password:req.params.password,Cpassword:req.params.cpassword})
    
    res.json(details);
})
app.post('/login/:name/:password',async(req,res)=>
{
    const details=await db.collection('Hello').findOne({Name:req.params.name,password:req.params.password})
    res.json(details);
})
app.post('/input/:name/:gmail',async(req,res)=>
{
    const details=await db.collection('Hello').insertOne({Name:req.params.name,Gmail:req.params.gmail})
    res.json(details);
})

app.get('/output/:name',async(req,res)=>
{
    const details =await db.collection("Hello").findOne({Name:req.params.name})
    res.json(details);
})
app.get('/all',async(req,res)=>
{
    const result =await db.collection("Hello").find().toArray();
    res.json(result);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        
    })
})