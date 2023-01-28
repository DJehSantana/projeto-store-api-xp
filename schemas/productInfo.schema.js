import mongoose from 'mongoose';
import { ReviewSchema } from './review.schema.js';

export const ProductInfoSchema = new mongoose.Schema(
    {
        productId: Number,
        category: String,
        width: String,
        heigth: String,
        depth: String,
        reviews: [ReviewSchema]

    }, { collection: "productInfo" }
);

