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