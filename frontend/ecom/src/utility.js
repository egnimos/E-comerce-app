import { ProductModel } from "./models/productModel";

export function generateRandomList() {
    return Array(10).fill().map((_, i) => {
        const productInfo = new ProductModel()
        productInfo.product_name = "Product Name"+i;
        return productInfo
    })
}