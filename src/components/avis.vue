<template>
    <div class="flex flex-col items-center">
        <div class="imagev">
            <p class="font2 text-center text-white text-5xl tracking-widest leading-none font-bold">
                RELEVEZ
            </p>
            <p class="font text-center text-white text-3xl leading-none font-bold">
                LE DEFI !
            </p>
        </div>
        <div>
            <p class="font text-center text-white text-4xl">ILS L'ONT TESTE</p>
        </div>

        <!-- Carousel Wrapper -->
        <div class="carousel-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">
            <!-- Carousel Track (slides are within this track) -->
            <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <!-- Each Review (Avis) Card -->
                <div class="carousel-slide" v-for="(avis, index) in avisList" :key="index">
                    <div class="h-auto flex flex-col items-center  w-80 card mt-6 p-2 m-auto mb-16 rounded-md">
                        <div class="flex text-white m-5">
                            <AnFilledStar />
                            <AnFilledStar />
                            <AnFilledStar />
                            <AnFilledStar />
                            <AnFilledStar />
                        </div>
                        <p class="text-white font2 text-center text-xl">
                            “ {{ avis.text }} “
                        </p>
                        <hr class="hr" />
                        <div class="flex text-white gap-5 p-2 items-center">
                            <img class="h-8" src="./../assets/img/avish.png" alt="" />
                            <div>
                                <p class="font text-xl">{{ avis.name }}</p>
                                <p class="font2">{{ avis.type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AnFilledStar } from '@kalimahapps/vue-icons';

// List of reviews (avis)
const avisList = ref([
    {
        text: "Super aprem avec mes potes ! Je reviendrais c'est sur !",
        name: "James Dean",
        type: "Réalité virtuelle",
        image: "./../assets/img/avish.png"
    },
    {
        text: "Incroyable experience ! Les effets sont bluffants !",
        name: "Marie Curie",
        type: "Realite augmentee",
        image: "./../assets/img/avish.png"
    },
    {
        text: "Une immersion totale, je recommande à 100% !",
        name: "Albert Einstein",
        type: "Simulation",
        image: "./../assets/img/avish.png"
    }
]);

// Carousel Logic
const currentIndex = ref(0);
let startX = 0;
let endX = 0;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    const swipeDistance = startX - endX;
    const threshold = 50; // Minimum swipe distance to trigger slide change

    if (swipeDistance > threshold) {
        // Swipe left (Next slide)
        currentIndex.value = (currentIndex.value + 1) % avisList.value.length;
    } else if (swipeDistance < -threshold) {
        // Swipe right (Previous slide)
        currentIndex.value = (currentIndex.value - 1 + avisList.value.length) % avisList.value.length;
    }
}
</script>

<style scoped>
/* Typography styles */
.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}

.card {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0, 0.1) 150%);
    border: 1px solid rgba(255, 192, 203, 0.1);
    backdrop-filter: blur(10px);
}

.hr {
    background: var(--ligne);
    height: 1px;
    width: 60vw;
    margin-top: 15px;
    border: 0;
}

.imagev {
    background-image: url("./../assets/img/v.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 160px;
    margin-bottom: 20px;
    width: 200px;
    align-content: center;
}

/* Carousel Styles */
.carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.carousel-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.carousel-slide {
    min-width: 100%;
    flex-shrink: 0;
}
</style>
