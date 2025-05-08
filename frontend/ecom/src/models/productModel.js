
/**
 * @typedef {Object} ProductModel
 * @property {number | null} id
 * @property {string} product_name
 * @property {string} product_description
 * @property {number} price
 * @property {string} currency_symbol
 * @property {[string]} product_image
 * @property {string} updated_at
 * @property {string} created_at
 */
export class ProductModel {
    /**
     * 
     * @param {Partial<ProductModel>} data 
     */
    constructor(data = {}) {
        /** @type {number|null} */
        this.id = data.id || null;
        /** @type {string} */
        this.product_name = data.product_name || "No Name";
        /** @type {string} */
        this.product_description = data.product_description || "No Description";
        /** @type {string} */
        this.product_image = data.product_image || "https://cdn.pixabay.com/photo/2016/03/21/20/05/image-1271454_1280.png"
        /** @type {number} */
        this.price = data.price || 0.0
        /** @type {string} */
        this.currency_symbol = data.currency_symbol || "$"
        /** @type {string} */
        this.updated_at = data.updated_at || Date.now().toString()
        /** @type {string} */
        this.created_at = data.created_at || Date.now().toString()
    }
}