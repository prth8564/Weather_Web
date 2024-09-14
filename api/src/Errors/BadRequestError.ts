import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
    constructor(cod:string , message: string){
        const errMsg:string = "Backend Issue, sorry for the inconvenience";
        super(cod,errMsg);
    }
}