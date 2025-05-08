<script setup>
import coffee_shop from "@/assets/coffee-shop.png";
</script>

<template>
    <!-- Footer -->
    <footer class="text-center text-lg-start text-muted mt-3" style="background-color: #f5f5f5;">
        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start pt-4 pb-4">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-12 col-lg-3 col-sm-12 mb-2">
                        <!-- Content -->
                        <a href="" target="_blank" class="">
                            <img :src="coffee_shop" height="35" alt="store image" />
                        </a>
                        <p class="mt-2 text-dark">
                            2025 E-Commerce App. Created as part of a YouTube Build Series for educational purposes.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-6 col-sm-4 col-lg-2">
                        <!-- Links -->
                        <h6 class="text-uppercase text-dark fw-bold mb-2">
                            Store
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-muted" href="#">About us</a></li>
                            <li><a class="text-muted" href="#">Find store</a></li>
                            <li><a class="text-muted" href="#">Categories</a></li>
                            <li><a class="text-muted" href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-6 col-sm-4 col-lg-2">
                        <!-- Links -->
                        <h6 class="text-uppercase text-dark fw-bold mb-2">
                            Information
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-muted" href="#">Help center</a></li>
                            <li><a class="text-muted" href="#">Money refund</a></li>
                            <li><a class="text-muted" href="#">Shipping info</a></li>
                            <li><a class="text-muted" href="#">Refunds</a></li>
                        </ul>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-6 col-sm-4 col-lg-2">
                        <!-- Links -->
                        <h6 class="text-uppercase text-dark fw-bold mb-2">
                            Support
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-muted" href="#">Help center</a></li>
                            <li><a class="text-muted" href="#">Documents</a></li>
                            <li><a class="text-muted" href="#">Account restore</a></li>
                            <li><a class="text-muted" href="#">My orders</a></li>
                        </ul>
                    </div>
                </div>
                <!-- Grid row -->
            </div>
        </section>
    </footer>
    <!-- Footer -->
</template>

<style scoped></style>