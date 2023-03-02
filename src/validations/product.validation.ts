import Joi from 'joi'
import ProductType from '../types/product.type'

export const createProductValidation = (payload: ProductType) => {
  const schema = Joi.object({
    product_id: Joi.string().required(),
    Name: Joi.string().required(),
    Condition: Joi.string().allow('', null),
    Price: Joi.number().required(),
    Size: Joi.string().required
  })
  return schema.validate(payload)
}
