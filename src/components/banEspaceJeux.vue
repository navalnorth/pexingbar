<template>
    <div class="bg relative">
        <img :src="image">

            <div class="absolute mt-8 top-2/4 left-12 flex justify-center items-center">
                <p class="text text-white text-3xl uppercase">
                    Nos espaces jeux
                </p>
            </div>

            <div class="absolute top-3/4 left-20 flex justify-center items-center">
                <Btn textColor="var(--blanc)" background="var(--blanc20)" class="py-4 px-16">
                    + d'infos
                </Btn>
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
    background: var(--gradRougeBan);
}
.text {
    font-family: var(--futuraBold);
}
</style>
