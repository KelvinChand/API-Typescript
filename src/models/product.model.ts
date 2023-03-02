import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true
    },
    Name: {
      type: String
    },
    Price: {
      type: Number
    },
    Size: {
      type: String
    }
  },
  { timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel
