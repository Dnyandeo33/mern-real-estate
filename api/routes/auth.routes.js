import express from 'express';
import authController from '../controller/auth.controller.js';
const { signUp, signIn, google, signOut } = authController;

const router = express.Router();

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.post('/google', google)
router.post('/sing-out', signOut)

export default router
