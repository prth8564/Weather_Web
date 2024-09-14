import { InvalidKeyError } from "../Errors/InvalidKeyError";
import { CityNotFoundError } from "../Errors/CityNotFoundError";
import { BadRequestError } from "../Errors/BadRequestError";
export function ErrorHandler(cod: string|number , message: string){
    switch(cod){
        case '404':
            return new CityNotFoundError(String(cod),message);
            break;
        case 401:
            return new InvalidKeyError(String(cod),message);
            break;
        case 400||'400':
            return new BadRequestError(String(cod),message);
            break;
        default:
            return new Error(message);

    }
}