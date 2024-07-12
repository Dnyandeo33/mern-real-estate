import bcryptjs from 'bcryptjs';
import validator from 'validator';
import User from '../models/user.model.js';
import { errorHandler } from "../utils/errorHandler.js";

const userController = {
    updateUser: async (req, res, next) => {
        const { username, email, avatar } = req.body
        const { userId } = req.params
        try {
            if (req.user.id !== userId) return next(errorHandler(401, 'You are not authorized to update'));
            if (req.body.password) {
                if (!validator.isStrongPassword(req.body.password)) return next(errorHandler(400, 'password must be strong'))
                req.body.password = bcryptjs.hashSync(req.body.password, 10)
            }

            const updateUser = await User.findByIdAndUpdate(userId, {
                $set: {
                    username,
                    email,
                    password: req.body.password,
                    avatar
                }
            }, { new: true })

            const { password, ...rest } = updateUser._doc;
            res.status(200).json(rest)
        } catch (error) {
            next(error)

        }

    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params
        try {
            if (req.user.id !== userId) return next(errorHandler(401, 'You are just delete your own account'))
            await User.findByIdAndDelete(userId)
            res.clearCookie('access_token')
            res.status(200).json('User deleted successfully')
        } catch (error) {
            next(error)
        }
    },

    signOut: async (req, res, next) => {
        try {
            res.clearCookie('access_token')
            return res.status(200).json('Logout successfully')
        } catch (error) {
            next(error)
        }
    }
}

export default userController