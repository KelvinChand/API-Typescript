import { Router } from 'express'
import { registerUser, createSession } from '../controllers/auth.controller'

export const authRouter: Router = Router()
authRouter.post('/register', registerUser)
authRouter.post('/login', createSession)
