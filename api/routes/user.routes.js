import express from 'express';
import userController from '../controller/user.controller.js';
const { signUp } = userController

const router = express.Router();

router.post('/sign-up', signUp)


export default router;