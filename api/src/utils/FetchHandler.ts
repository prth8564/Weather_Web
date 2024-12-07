import { ResultHandler } from "./ResultHandler";
import { ErrorHandler } from "./ErrorHandler";
import { InternalServerError } from "../Errors/InternalServerError";
const API_KEY = process.env.API_KEY
function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}
export async function FetchHandler(retries: number, location: string) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&&appid=${API_KEY}`);
        if (!response.ok) {
            const errData = await response.json();

            throw ErrorHandler(errData.cod, errData.message); // Handle and throw the error
        }

        const data = await response.json(); // Parse the JSON data
        const output = ResultHandler(data); // Process the data and generate output
        return output; // Return the output value
    } catch (error) {
        if (error instanceof InternalServerError && retries > 0) {
            console.log("retrying----");
            await sleep
            return FetchHandler(retries - 1, location);
        }
        throw error;
    }
}