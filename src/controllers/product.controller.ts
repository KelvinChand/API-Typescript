/* eslint-disable array-callback-return */
import { type Request, type Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error(error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add product success', data: req.body })
}

export const getProduct = (req: Request, res: Response) => {
  const products = [
    { name: 'Kaos', condition: 'good', price: 1750000 },
    { name: 'Sepatu', condition: 'good', price: 2400000 }
  ]
  const {
    params: { name }
  } = req
  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product
      }
    })
    if (filterProduct.length === 0) {
      logger.info('Failed get product data')
      return res.status(204).send({
        status: false,
        statusCode: '204',
        product: filterProduct
      })
    }
    logger.info('Success get product data')
    return res.status(200).send({
      status: true,
      statusCode: '200',
      product: filterProduct
    })
  }
  logger.info('Success get product data')
  return res.status(200).send({
    status: true,
    statusCode: '200',
    products
  })
}
