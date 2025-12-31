import express from "express";
import { google,signOut, signin, signup } from "../controllers/auth.controllers.js";
console.log("✅ Auth router loaded");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google',google);
router.get('/signout', signOut)

export default router;
