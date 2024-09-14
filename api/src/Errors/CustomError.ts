export class CustomError extends Error {
    cod:string;
    constructor(cod:string , message: string){
        super(message);
        this.cod = cod;
        Object.setPrototypeOf(this , new.target.prototype);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}