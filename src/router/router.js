import { Router } from "express";

const router = Router();

import { addSchool , listSchool } from "../controller/schoolController.js";


router.route("/healthCheck").get((req,res) => {
    res.send("all working");
})


router.route("/addSchool").post( addSchool );
router.route("/listSchool").get( listSchool );



export { router }





