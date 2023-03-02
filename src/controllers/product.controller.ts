/* eslint-disable array-callback-return */
import { type Request, type Response } from 'express'
import { logger } from '../utils/logger'
import { addProducToDB, getFilterProductByName, getProductById, getProductFromDB } from '../services/product.service'
import { createProductValidation } from '../validations/product.validation'

import { v4 as uuidv4 } from 'uuid'

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  try {
    await addProducToDB(value)
    logger.info('Success add new product')
    return res.status(201).send({ status: true, statusCode: 201, message: 'Add product success', data: req.body })
  } catch (error: any) {
    logger.error(error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  if (id) {
    const product = await getProductById(id)
    if (product) {
      logger.info('Success get product data')
      return res.status(200).send({ status: true, statusCode: 200, data: product })
    } else {
      logger.info('Data Not Found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found', data: {} })
    }
  } else {
    const products: any = await getProductFromDB()
    logger.info('Success get product data')
    return res.status(200).send({ status: true, statusCode: 200, data: products })
  }
}
// Error filter product can't get specified data
export const filterProduct = async (req: Request, res: Response) => {
  const {
    params: { name }
  } = req

  if (name) {
    const product: any = await getFilterProductByName(name)
    if (product) {
      logger.info('Success get product data')
      return res.status(200).send({ status: true, statusCode: 200, data: product })
    } else {
      logger.info('Data Not Found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found', data: {} })
    }
  }
}
