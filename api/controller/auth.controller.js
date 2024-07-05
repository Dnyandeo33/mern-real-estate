import bcryptjs from 'bcryptjs';
import validator from 'validator';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/errorHandler.js';

const authController = {
    signUp: async (req, res, next) => {
        const { email, username, password } = req.body
        try {
            const existEmail = await User.findOne({ email })
            const existUsername = await User.findOne({ username })

            if (existEmail) return next(errorHandler(400, 'Email already exist...'));

            if (existUsername) return next(errorHandler(400, 'Username already exist...'));

            if (!email || !username || !password) return next(errorHandler(401, 'Please fill all fields...'))

            if (!validator.isEmail(email)) return next(errorHandler(401, 'Please enter a valid email'))
            if (!validator.isLength(username, { min: 3 })) return next(errorHandler(401, 'Username must be at least 3 characters long...'))

            if (!validator.isLength(password, { min: 6 })) {
                return next(errorHandler(401, 'Password must be at least 6 characters long...'))
            } else {
                const hashPassword = bcryptjs.hashSync(password, 10)
                const createUser = await new User({ email, username, password: hashPassword })
                const user = await createUser.save()
                return res.status(201).json('User created successfully...')
            }

        } catch (error) {
            console.log(error);
        }
    },
    signIn: async (req, res, next) => {

    },
    google: async (req, res, next) => {

    },
    signOut: async (req, res, next) => {

    }
}

export default authController