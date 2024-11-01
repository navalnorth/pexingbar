<template>
    <div class="bar pb-20">
        <div class="py-4">
            <p class="titre text-white text-center text-4xl uppercase">Bar Design</p>
            <p class="texte text-white text-center text-xl uppercase">et estpace Sancking</p>
        </div>

        <div class=" flex justify-center items-center">
            <img src="../assets/img/barDesignTacos.png" class="w-32">
            <img src="../assets/img/barDesignDog.png" class="w-32">
        </div>

        <div class="py-4 flex justify-center items-center mr-6">
            <p class="texte text-white text-md">
                Decouvrez nos nombreuses boissons,<br/>
                cocktails maison et snacks savoureux.<br/>
                De quoi vous regaler entre amis sans<br/>
                quitter la partie !
            </p>
        </div>

        <div class="flex justify-center">
            <Btn textColor="var(--blanc)" background="var(--blanc20)" class="mt-6 py-4 px-10">
                Voir la carte
            </Btn>
        </div>
    </div>
</template>


<script setup>
import Btn from "../components/btn.vue";

</script>


<style scoped>
.bar {
    box-shadow: 1px 5px 5px -2px black;
}
.titre {
    font-family: var(--futuraBold);
}
.texte {
    font-family: var(--futura);
}
</style>