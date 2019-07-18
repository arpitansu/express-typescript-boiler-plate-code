/**
 * this is global route file
 */

import express from "express";
import * as controller from "../controllers/controller"

let router = express.Router();

router.use("/controller", controller.test)

export = router;
