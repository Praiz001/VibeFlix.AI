import { Request, Response } from "express";
import { HttpStatusCode } from "axios";
import { successResponse, errorResponse } from "../helpers/responseHandler";


const sampleController = {
    someMethod: async (req: Request, res: Response) => {
        try {
            return res.status(HttpStatusCode.Ok).json(successResponse({
                message: "Sample method",
            }));
        } catch (error) {
            return res.status(HttpStatusCode.InternalServerError).json(errorResponse({
                message: "Internal server error",
            }));

        }
    }
}

export default sampleController