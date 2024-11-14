import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.urldb)
.then(() =>{
    console.log("funciona la base de datos")
})
.catch((error)=>{
    console.log("Nofunciona, ya salió", error)
})

const app=express();
app.use(cors());
app.listen(4000,()=>{
    console.log("Se escucha el servidor")
})
test()