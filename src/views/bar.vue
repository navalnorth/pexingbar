<template>
    <div>
        <img src="../assets/img/barBan.png" class="w-full">

        <div class="ml-8 my-8 ">
            <p class="titre uppercase text-white text-3xl">un bar design</p>
            <p class="sousTitre uppercase text-white text-lg font-bold leading-4">et espace snacking</p>
        </div>

        <div class="flex justify-center">
            <img src="../assets/img/barSnack.png" class="w-72">
        </div>
        <div class="ml-8 mt-4">
            <p class="titre text-lg uppercase text-white">Entre deux saisons...</p>
            <p class="text-white">
                Retrouvez-vous au bar pour profiter<br>
                de nos <strong>cocktails maison</strong>,<br>
                nos boissons variées. Régalez-vous avec nos<br>
                <strong>snacks salés et sucrés !</strong>
            </p>
        </div>

        <div class="">
            <div class="my-5 cursor-pointer" @click="game">
                <BanEspaceJeux image="src/assets/img/manetteEspaceJeux.png">JEUX VIDEO</BanEspaceJeux>
            </div> 
            <div class="my-5 cursor-pointer" @click="realite">
                <BanEspaceJeux image="src/assets/img/realite-virtuelle.png">REALITE VIRTUELLE</BanEspaceJeux>
            </div>
            <div class="my-5 cursor-pointer" @click="societe">
                <BanEspaceJeux image="src/assets/img/game-societe.png">JEUX DE SOCIETE</BanEspaceJeux>
            </div>
        </div>

        <div>
            <Avis />
        </div>
        <div>
            <EventGame image="src/assets/img/vrEvent.png">
                <template #title>Soirees speciales gaming</template>
                <template #subtitle>Escape Game <br> realite virtuelle</template>
                <template #description>
                    Plongez en équipe dans une mission <br />
                    VR immersive ! Résolvez des énigmes <br />
                    et échappez-vous avant la fin du temps <br>
                    imparti. Serez-vous à la hauteur ?
                </template>
                <template #maxPlayers>4 joueurs max</template>
                <template #gameDuration>1h de jeu garantie</template>
                <template #eventDate>21 decembre 2024</template>
                <template #btnText>s'inscrire</template>
                <template #allEventsBtn>Tous les événements</template>
            </EventGame>
        </div>
    </div>
</template>

<script setup>
import BanEspaceJeux from "../components/banEspaceJeux.vue";
import Avis from "../components/avis.vue";
import EventGame from "../components/eventGame.vue";
import router from "@/router";

const realite = () => {
    router.push('realite-virtuelle');
   
}

const game = () => {
    router.push('jeux-video');
   
}

const societe = () => {
    router.push('jeux-societe');
    
}
</script>

<style scoped>
.titre {
    font-family: var(--futuraBold);
}

.sousTitre {
    font-family: var(--futura);
}
</style>