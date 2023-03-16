import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  filterProduct,
  getProduct,
  updateProduct
} from '../controllers/product.controller'

export const productRouter: Router = Router()

productRouter.get('/', getProduct)
productRouter.get('/:id', getProduct)
productRouter.get('/:name', filterProduct)
productRouter.post('/', createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)
