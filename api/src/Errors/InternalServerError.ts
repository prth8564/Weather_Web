import { CustomError } from "./CustomError";

export class InternalServerError extends CustomError {
    constructor(cod:string , message: string){
        const errMsg:string = message + " :Internal server nothing we can do about it for now"
        super(cod,errMsg);
    }
}