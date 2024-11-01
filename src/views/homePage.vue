<template>
    <div class="tout">
        <BanAccueil />
        <div class="py-4">
            <p class="font text-center text-white text-3xl">PLUS DE 300m²</p>
            <p class="font2 text-center text-white text-md leading-none font-bold">
                POUR JOUER EN FAMILLE <br /> OU ENTRE AMIS
            </p>
        </div>

        <img src="../assets/img/homePc.png" class="w-full">

        <div class="p-4 flex flex-col justify-center items-center">
            <Btn textColor="var(--bleu)" background="var(--blanc)" class="w-56 font-bold">
                réserver<br /> une partie
            </Btn>
            <Btn textColor="var(--blanc)" background="var(--blanc20)" class="mt-6 w-56">
                + d'infos
            </Btn>
        </div>

        <div>
            <avis/>
        </div>
    </div>
</template>


<script lang="ts" setup>
import BanAccueil from "../components/banAccueil.vue";
import Btn from "../components/btn.vue";
import avis from "../components/avis.vue";


</script>


<style scoped>
.tout {
    background-color: #2D005DB2;
}

.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}
</style>