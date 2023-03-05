import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import ProductType from '../types/product.type'

export const addProducToDB = async (payload: ProductType) => {
  return await productModel.create(payload)
}

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error: Error) => {
      logger.info('Cannot get data from DB')
      logger.error(error)
    })
}

export const getProductById = async (id: string) => {
  return await productModel.findOne({ product_id: id })
}

export const getFilterProductByName = async (name: string) => {
  return await productModel.find({ Name: name })
}

export const updateProductById = async (id: string, payload: ProductType) => {
  return await productModel.findOneAndUpdate(
    {
      product_id: id
    },
    { $set: payload }
  )
}
