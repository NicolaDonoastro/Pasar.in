import express from 'express'

import productController from '../controller/product'

import { uploadPhoto, isAuth } from '../middlewares'

const router = express.Router()

router.get('/', isAuth, productController.getProducts)

router.get('/min', productController.getProductsMinPrice)

router.get('/add', productController.getPostProduct)
router.post('/add', uploadPhoto, productController.postProduct)

router.get('/delete/:id', productController.deleteProduct)

router.post('/buy/:id', productController.buyProduct)

export default router
