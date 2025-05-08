<script setup>
import coffee_shop from "@/assets/coffee-shop.png";
import Heart from "./icons/Heart.vue";
import Person from "./icons/SignIn.vue";
import Cart from "./icons/Cart.vue";
</script>

<template>
    <header>
        <div class="p-3 text-center bg-white border-bottom">
            <div class="container">
                <div class="row gy-2">
                    <!-- Left elements -->
                    <div class="col col-lg-2 col-sm-4 col-4">
                        <a href="#" target="_blank" class="float-start">
                            <img :src="coffee_shop" height="35" width="35" />
                        </a>
                    </div>
                    <!-- Left elements -->

                    <!-- Center elements -->
                    <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                        <div class="d-flex float-end">
                            <a href="#" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                                target="_blank"> <i class="m-1 me-md-2"><Person class="icon-size"/></i>
                                <p class="d-none d-md-block mb-0">Sign in</p>
                            </a>
                            <a href="#" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                                target="_blank"> <i class=" m-1 me-md-2"><Heart class="icon-size"/></i>
                                <p class="d-none d-md-block mb-0">Wishlist</p>
                            </a>
                            <a href="#" class="border rounded py-1 px-3 nav-link d-flex align-items-center"
                                target="_blank"> <i class=" m-1 me-md-2"><Cart class="icon-size"/></i>
                                <p class="d-none d-md-block mb-0">My cart</p>
                            </a>
                        </div>
                    </div>
                    <!-- Center elements -->
                </div>
            </div>
        </div>
        <!-- Jumbotron -->

        <!-- Navbar -->

        <nav class="navbar navbar-expand-lg bg-body-white navbar-light">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Top Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Today's Deal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.icon-size {
    width: 2em;
    fill: red;
}
</style>