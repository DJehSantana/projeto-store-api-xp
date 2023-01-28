import mongoose from "mongoose";

export const ReviewSchema = new mongoose.Schema(
    {
        name: String,
        description: String
    }, { collection: "productInfo" }
);