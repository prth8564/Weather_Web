import { CustomError } from "./CustomError";

export class CityNotFoundError extends CustomError {
    constructor(cod:string , message: string){
        const errMsg:string = message + " :The city you provided was not found,Please verify"
        super(cod,errMsg);
    }
}