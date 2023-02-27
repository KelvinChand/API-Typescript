import Joi from 'joi'

interface ProductInterface {
  name: string
  condition: string
  price: number
}

export const createProductValidation = (payload: string) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    condition: Joi.string().allow('', null),
    price: Joi.number().required()
  })
  return schema.validate(payload)
}
