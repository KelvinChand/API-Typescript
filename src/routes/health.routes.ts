import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health check success')
  res
    .status(200)
    .send({ status: true, statusCode: '200', data: [{ name: 'Kelvin William Chandra', condition: 'Good' }] })
})

HealthRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success add new patient')
  res.status(200).send({ status: true, statusCode: 200, data: req.body })
})