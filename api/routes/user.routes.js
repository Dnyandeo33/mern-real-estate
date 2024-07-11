import express from 'express';
import userController from '../controller/user.controller.js';
import verifyToken from '../middleware/verifyToken.js';
const { updateUser, test } = userController

const router = express.Router()

router.put('/update/:userId', verifyToken, updateUser)


export default router;