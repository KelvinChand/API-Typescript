import userModel from '../models/user.model'
import userType from '../types/user.type'

export const createUser = async (payload: userType) => {
  return await userModel.create(payload)
}
