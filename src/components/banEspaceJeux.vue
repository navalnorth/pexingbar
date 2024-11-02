<template>
    <div class="bg relative">
        <div class="image-wrapper">
            <img :src="image" class="w-full h-full object-cover object-center" />


            <div class="absolute mt-8 top-2/4 w-full flex justify-center items-center">
                <p class="text text-white text-3xl uppercase">
                    <slot></slot>
                </p>
            </div>

            <div class="absolute top-3/4 w-full flex justify-center items-center">
                <Btn textColor="var(--blanc)" background="var(--blanc20)" class="py-4 px-16">
                    + d'infos
                </Btn>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Btn from "../components/btn.vue";

defineProps<{
    image: string
}>()
</script>

<style scoped>
.bg {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper {

    width: 400px;
    height: 300px;
    background: var(--gradRougeBan);
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
    height: 100%;


}

.text {
    font-family: var(--futuraBold);
}
</style>
