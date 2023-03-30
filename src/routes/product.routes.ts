import { Router } from 'express'
import { requireAdmin, requireUser } from '../middleware/auth'
import {
  createProduct,
  deleteProduct,
  filterProduct,
  getProduct,
  updateProduct
} from '../controllers/product.controller'

export const productRouter: Router = Router()

productRouter.get('/', requireUser, getProduct)
productRouter.get('/:id', requireUser, getProduct)
productRouter.get('/:name', requireUser, filterProduct)
productRouter.post('/', requireAdmin, createProduct)
productRouter.put('/:id', requireAdmin, updateProduct)
productRouter.delete('/:id', requireAdmin, deleteProduct)
