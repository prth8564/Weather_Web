import { InvalidKeyError } from "../Errors/InvalidKeyError";
import { CityNotFoundError } from "../Errors/CityNotFoundError";
import { BadRequestError } from "../Errors/BadRequestError";
import { InternalServerError } from "../Errors/InternalServerError";
export function ErrorHandler(cod: string|number , message: string){
    switch(cod){
        case '404':
            return new CityNotFoundError(String(cod),message);
        case 401:
            return new InvalidKeyError(String(cod),message);
        case 400||'400':
            return new BadRequestError(String(cod),message);
        default:
            return new InternalServerError(String(cod),message);

    }
}