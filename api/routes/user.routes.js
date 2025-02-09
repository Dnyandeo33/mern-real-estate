import express from 'express';
import userController from '../controller/user.controller.js';
import verifyToken from '../middleware/verifyToken.js';
const { updateUser, deleteUser, signOut } = userController

const router = express.Router()

router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/sign-out', signOut)


export default router;