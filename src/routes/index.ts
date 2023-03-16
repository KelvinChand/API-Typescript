import { type Application, type Router } from 'express'
import { authRouter } from './auth.routes'
import { HealthRouter } from './health.routes'
import { productRouter } from './product.routes'

const _routes: Array<[string, Router]> = [
  ['/health', HealthRouter],
  ['/product', productRouter],
  ['/auth', authRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
