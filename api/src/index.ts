import * as dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import express from "express";
import { Request,Response } from "express";
import { CityNotFoundError } from "./Errors/CityNotFoundError";
import { ErrorHandler } from "./utils/ErrorHandler";
import { ResultHandler } from "./utils/ResultHandler";
import { CustomError } from "./Errors/CustomError";
import { FetchHandler } from "./utils/FetchHandler";
const port = 8000;



const app = express();
type err = {
    cod:number|string,
    message:string
}
app.get('/',async (req:Request,res:Response) =>{

    try{
    const output = await FetchHandler(2 ,"New York" );
    res.json({output});
    }
    catch(error:unknown){
        if(error instanceof CustomError){
        res.status(500).json({
                          code: error.cod,
                            message: error.message,
                         });
    }
    else{
        res.json({error:'Unknown'});
    }
}
})

app.listen(port,()=>{
    console.log("8000");
})
