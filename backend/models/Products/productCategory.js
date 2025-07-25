import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String },
    description: { type: String },

});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

export default ProductCategory
