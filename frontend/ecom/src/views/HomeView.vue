<script setup>
import HeaderComp from "@/components/HeaderComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import CarouselComp from "@/components/CarouselComp.vue"
import ProductBoxComp from "@/components/ProductBoxComp.vue"
import { generateRandomList } from "@/utility.js"
let product_list = generateRandomList()

</script>

<template>
  <div class="container-fluid">
    <!-- Header -->
    <HeaderComp />
    <CarouselComp/>
    <!-- list of products -->
    <div class="container my-2">
      <div class="row">
        <ProductBoxComp v-for="(prod, i) in product_list" :key="i" :productInfo="prod" />
      </div>
    </div>
    <!-- Footer -->
    <FooterComp />
  </div>
</template>
