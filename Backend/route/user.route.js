import express from 'express';

import { signup  } from '../controller/user.controller.js';
import { login } from '../controller/user.controller.js';
const router=express.Router();
router.post("/Signup",signup);
router.post("/Login",login);
export default router;