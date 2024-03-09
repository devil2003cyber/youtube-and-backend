import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials :true
})) // origin defined karta he

app.use(express.json({limit:"16kb"})) //req ka size specified

app.use(express.urlencoded({extended:true,limit:"16kb"})) //suppose search if we search hitesh++ but still show result 

app.use(express.static("public")) //images ayi toh server pe store karo

app.use(cookieParser())
export {app}