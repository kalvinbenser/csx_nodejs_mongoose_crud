import ProductModel from '../models/ProductModel'

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.json({ data: products, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
