import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { dbConnect } from './configs/database.config';
import userDeatailRouter from './routers/userDetail.router'
dbConnect();

const app=express();
app.use(express.json());
app.use("/api",userDeatailRouter);

app.listen(process.env.Port,()=>{
    console.log(`Server Run On  Port No:${process.env.Port}`);
    
});


