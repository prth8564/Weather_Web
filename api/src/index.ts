import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import express from "express";
import { Request, Response } from "express";
import { CustomError } from "./Errors/CustomError";
import { FetchHandler } from "./utils/FetchHandler";
const port = 8000;

const app = express();
app.use(express.json());
type err = {
    cod: number | string;
    message: string;
};

app.post("/", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const city = req.body.city;

        const output = await FetchHandler(2, city);
        res.json({ output });
    } catch (error: unknown) {
        console.log(error);
        if (error instanceof CustomError) {
            res.status(Number(error.cod)).json({
                code: error.cod,
                message: error.message,
            });
        } else {
            res.json({ error: "Unknown error, will be resolved" });
        }
    }
});

app.listen(port, () => {
    console.log("8000");
});
