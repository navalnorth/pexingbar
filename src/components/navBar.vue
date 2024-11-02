<template>
    <div class="tout h-full py-4">

        <div class="flex justify-between">
            <a href="/"><img src="../assets/img/logo.png" class="w-10 ml-8"></a>
            <AnOutlinedMenu @click="openMenu" class="text-white text-5xl mr-6 cursor-pointer" />
        </div>

        <div v-if="!isClosed">
            <nav class="mr-6">
                <ul class="text-right text-white">
                    <button
                        class="button text-lg uppercase mt-5 w-40 bg-white font-semibold rounded-md h-10">réserver</button>

                    <li class="font text-md uppercase mt-5 cursor-pointer" >
                        <div class="flex justify-end mr-32" @click="openSousMenu" v-if="isClosed2">
                            <AnOutlinedDown class="text-white cursor-pointer absolute mt-1" />
                        </div>
                        <div class="flex justify-end mr-32" @click="openSousMenu" v-if="!isClosed2">
                            <AkChevronUpSmall class="text-white cursor-pointer absolute mt-1" />
                        </div>
                        <p @click="espaceGame">les espaces jeux </p>
                        <ul v-if="isClosed2">
                            <li class="py-2 text-xs"><a href="#" @click="game">jeux video</a></li>
                            <li class="py-2 text-xs"><a href="#" @click="realite">realite virtuelle</a></li>
                            <li class="py-2 text-xs"><a href="#" @click="societe">jeux de societe</a></li>
                        </ul>
                    </li>

                    <li class="font text-md uppercase mt-5">nos evenements</li>
                    <li class="font text-md uppercase mt-5 font-extrabold">reserver une partie</li>
                    <li class="font text-md uppercase mt-5">le concept pexing bar</li>
                    <li class="font text-md uppercase mt-5">le bar-snack</li>
                    <li class="font text-md uppercase mt-5">contact</li>
                </ul>
            </nav>
        </div>

    </div>
</template>
<script setup lang="ts">
import { AnOutlinedMenu, AnOutlinedDown, AkChevronUpSmall } from '@kalimahapps/vue-icons';
import { ref } from 'vue';
import  router from '@/router';

const isClosed = ref(true)
const isClosed2 = ref(false)

const openMenu = () => {
    isClosed.value = !isClosed.value
}
const openSousMenu = () => {
    isClosed2.value = !isClosed2.value
}

const espaceGame = () =>  {
    router.push('/espace-game');
    openMenu();
}

const realite = () => {
    router.push('realite-virtuelle');
    openMenu();
}

const game = () => {
    router.push('jeux-video');
    openMenu();
}

const societe = () => {
    router.push('jeux-societe');
    openMenu();
}

</script>
<style scoped>
.tout{
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    z-index: 9999;
    background-color: #2D005D
}

.font {
    font-family: var(--futura);
}

.button {
    font-family: var(--orbitron);
    color: #2D005DB2;
}
</style>