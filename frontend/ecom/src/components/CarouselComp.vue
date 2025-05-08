<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**@type {[any]} */
const imageList = [
    {
        url: "https://cdn.pixabay.com/photo/2015/08/25/11/50/shopping-mall-906721_1280.jpg",
        name: "mall",
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_1280.jpg",
        name: "mall",
    },
    {
        url: "https://cdn.pixabay.com/photo/2019/02/21/11/18/shopping-4011117_1280.jpg",
        name: "mall",
    }
]

const activeIndex = ref(0);
function next() {
    activeIndex.value = (activeIndex.value + 1) % imageList.length
}

function prev() {
    activeIndex.value = ((activeIndex.value - 1) + imageList.length) % imageList.length
}

let intervalId = null;
onMounted(() => {
    intervalId = setInterval(() => {
        next()
    }, 1000);
})

onUnmounted(() => {
    clearInterval(intervalId)
})

</script>

<template>
    <!-- <div class="bg-primary text-white py-5">
        <div class="container py-5">
            <h1>
                Best products & <br />
                brands in our store
            </h1>
            <p>
                Trendy Products, Factory Prices, Excellent Service
            </p>
            <button type="button" class="btn btn-outline-light">
                Learn more
            </button>
            <button type="button" class="btn btn-light shadow-0 text-primary pt-2 border border-white">
                <span class="pt-1">Purchase now</span>
            </button>
        </div>
    </div> -->

    <div>
        <div class="carousel slide">
            <div class="carousel-inner">
                <transition-group name="fade" tag="div" class="carousel-inner">
                    <div style="height: 45vh;" v-for="(image, i) in imageList" :key="image" :class="[
                        'carousel-item',
                        i == activeIndex ? 'active' : '',
                    ]">
                        <img :src="image.url" class="d-block w-100" :alt="image.name">
                    </div>
                </transition-group>
            </div>
            <button @click="prev" class="carousel-control-prev" type="button">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button @click="next" class="carousel-control-next" type="button">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>