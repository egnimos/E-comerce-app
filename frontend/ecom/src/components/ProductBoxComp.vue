<script setup>
import { ProductModel } from "@/models/productModel.js";
import Heart from "./icons/Heart.vue";

const props = defineProps({
    productInfo: {
        type: ProductModel,
        default: new ProductModel()
    }
})

</script>

<template>
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card w-100 my-2 shadow-2-strong">

            <!-- product image -->
            <img :src="productInfo.product_image" class="card-img-top" style="aspect-ratio: 1 / 1" />

            <!-- product body -->
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ productInfo.product_name }}</h5>
                <p class="card-text">{{ productInfo.currency_symbol + " " + productInfo.price }}</p>
                <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" class="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="text-secondary px-1">
                            <Heart class="icon-size" />
                        </i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-hover:hover {
    border-color: #3b71ca !important;
    background-color: white !important;
}

.icon-hover:hover i {
    color: #3b71ca !important;
}

.icon-size {
    width: 2em;
    fill: red;
}
</style>