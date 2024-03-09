//mongoose , dotenv , express

import mongoose from "mongoose"
import express from 'express'
const  app = express();
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(` Server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB connction failed !!! ",err)
})
// ( async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERR: ",error)
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is Listening on port : ${process.env.PORT}`)
//        })
//     }catch(error){
//      console.error("ERROR: ",error)
//      throw error
//     }
// })()