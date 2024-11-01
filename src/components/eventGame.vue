<template>
    <div class="event py-10 flex flex-col justify-center items-center">
        <p class="titre text-center text-white uppercase text-4xl">
            <slot name="title"></slot>
        </p>

        <div class="bloc flex flex-col justify-center items-center mt-4 py-6 rounded-lg">
            <img :src="image" class="w-72 rounded-t-md" />

            <div class="text py-2">
                <p class="text-center text-white text-xl uppercase w-72 border-none leading-5">
                    <slot name="subtitle"></slot>
                </p>
            </div>

            <div class="flex flex-col justify-center items-center py-4">
                <p class="description text-left text-white text-md">
                    <slot name="description">

                    </slot>
                </p>
                <hr class="hr">
            </div>

            <div class="flex flex-row justify-start items-start self-start gap-3 text-lg ml-12">
                <img src="../assets/img/xEvent.png" class="w-6 justify-start items-start">
                <p class="description text-white uppercase">
                    <slot name="maxPlayers"></slot>
                </p>
            </div>

            <div class="flex flex-row justify-start items-start self-start gap-3 text-lg ml-12 mt-2">
                <img src="../assets/img/timeEvent.png" class="w-6 justify-start items-start">
                <p class="description text-white uppercase">
                    <slot name="gameDuration"></slot>
                </p>
            </div>

            <div class="flex flex-row justify-start items-start self-start gap-3 text-lg ml-10 mt-2 calendrier">
                <img src="../assets/img/calendrierEvent.png" class="w-6 justify-start items-start">
                <p class="descriptionTime text-white uppercase">
                    <slot name="eventDate"></slot>
                </p>
            </div>

            <Btn textColor="var(--bleu)" background="var(--blanc)" class="font-black py-4 px-20 mt-8 z-10">
                <slot name="btnText"></slot>
            </Btn>
        </div>

        <Btn textColor="var(--blanc)" background="var(--bleuBtn)" class="mt-6 py-4 px-16">
            <slot name="allEventsBtn"></slot>
        </Btn>
    </div>
</template>


<script setup lang="ts">
import Btn from "../components/btn.vue";

defineProps<{
    image: string
}>()
</script>


<style scoped>
.event {
    background: var(--gradRougeEvent);
}

.titre {
    font-family: var(--futuraBold);
}

.bloc {
    background-color: rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(20px);
    width: 330px;
}

.bloc::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: inherit;
}

.text {
    background-color: #FF304C99;
    font-family: var(--futuraBold);
}

.description {
    font-family: var(--futura);
}

.descriptionTime {
    font-family: var(--futuraBold);
}

.hr {
    width: 240px;
    border: none;
    height: 1px;
    background-color: white;
    margin: 25px 0 0 0;
    background: linear-gradient(90deg, white 0%, transparent 120%);
}

.calendrier {
    position: relative;
    overflow: hidden;
    padding: 5px 50px 5px 10px;
    z-index: 1;
}

.calendrier::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    opacity: 0.15;
    backdrop-filter: blur(20px);
    z-index: -1;
    border-radius: inherit;
}
</style>