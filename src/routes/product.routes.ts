import { Router, type Request, type Response, type NextFunction } from 'express'
import { createProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  res.status(200).send({
    status: true,
    statusCode: '200',
    data: [{ name: 'Nike Air Jordan', condition: 'Good', price: 'Rp.2000.000,00' }]
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error(error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add product success', data: req.body })
})
