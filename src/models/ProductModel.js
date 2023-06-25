import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    image_url: String,
    description: String,
    category: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model('product', productSchema)
