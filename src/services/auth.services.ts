import userModel from '../models/user.model'
import userType from '../types/user.type'

export const createUser = async (payload: userType) => {
  return await userModel.create(payload)
}

export const findUserByEmail = async (email: string) => {
  return await userModel.findOne({ email })
}
