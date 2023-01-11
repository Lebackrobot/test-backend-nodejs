import express from 'express'
import ProductController from '../controllers/product-controller.js'

const productRouter = express.Router()

productRouter
    .post('/products', ProductController.createProduct)        

    .get('/products', ProductController.getProducts)
    .get('/products/:price', ProductController.getProducts)
    .get('/products/:id', ProductController.getProduct)

    .put('/products/:id', ProductController.updateProduct)

    .delete('/products/:id', ProductController.deleteProduct)


export default productRouter