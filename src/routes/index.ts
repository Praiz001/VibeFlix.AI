import { Router } from "express";
import { sampleController } from "../controllers";

const router = Router();

router.post("/sample", sampleController.someMethod);


export default router;