import jwt from 'jsonwebtoken'
import CONFIG from '../config/environment'
import { logger } from './logger'

export const signJWT = (payload: object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, CONFIG.jwt_private, {
    ...(options && options),
    algorithm: 'RS256'
  })
}
export const verifyJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, CONFIG.jwt_public)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: logger.info(error.message === 'JWT Is Expired or Not Eligble To Use'),
      decoded: null
    }
  }
}
