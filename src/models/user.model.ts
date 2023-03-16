import mongoose from 'mongoose'

const userScehma = new mongoose.Schema(
  {
    user_id: { type: String, unique: true },
    email: { type: String, unique: true },
    name: { type: String, default: '' },
    password: { type: String, default: '' },
    role: { type: String, default: 'regular' }
  },
  { timestamps: true }
)
const userModel = mongoose.model('user', userScehma)
export default userModel
