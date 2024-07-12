import express from 'express';
import authController from '../controller/auth.controller.js';
const { signUp, signIn, google } = authController;

const router = express.Router();

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.post('/google', google)


export default router
