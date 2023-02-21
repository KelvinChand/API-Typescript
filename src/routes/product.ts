import { Router, type Request, type Response, type NextFunction } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: '200',
    data: [{ name: 'Nike Air Jordan', condition: 'Good', price: 'Rp.2000.000,00' }]
  })
})
