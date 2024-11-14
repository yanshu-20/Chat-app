import express from "express"
import { login, logout, signUp } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signUp);

router.post("/login",login);

router.post("/logout",logout);
export default router;


// there are the functionality of express that we are going to add in our app...
