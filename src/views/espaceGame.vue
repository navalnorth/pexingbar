<template>
    <div class="flex flex-col  text-white ">
        <div class="w-3/4 flex flex-col mx-auto mb-10 items-center  ">
            <p class="font text-3xl mt-4">3 ESPACES</p>
            <p class="font2">POUR UN MAXIMUM DE FUN</p>
            <p class="font2 my-4">Passionnes de jeux video, de realite <br>
                virtuelle ou jeux societe, seul, en famille <br>
                ou entre amis, chez Pexing Bar vous <br>
                trouverez forcement de quoi vous amuser <br>
                et partager un bon moment !
            </p>

            <Btn textColor="var(--bleu)" background="var(--blanc)" class="font-black py-4 px-8">
                réserver une partie
            </Btn>
        </div>
        <div class="">
            <div class="my-5 cursor-pointer " >
                <BanEspaceJeux @click="game" :image="manetteEspaceJeux">JEUX VIDEO</BanEspaceJeux>
            </div>
            <div class="my-5 cursor-pointer" @click="realite">
                <BanEspaceJeux :image="realitevirtuelle">REALITE VIRTUELLE</BanEspaceJeux>
            </div>
            <div class="my-5 cursor-pointer" @click="societe">
                <BanEspaceJeux :image="gamesociete">JEUX DE SOCIETE</BanEspaceJeux>
            </div>
        </div>

        <div>
            <Avis />
        </div>
        <div>
            <EventGame :image="vrEvent">
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
        <div>
            <BarDesign />
        </div>

    </div>
</template>

<script setup>
import Btn from "../components/btn.vue";
import BanEspaceJeux from "../components/banEspaceJeux.vue";
import Avis from "../components/avis.vue";
import EventGame from "../components/eventGame.vue";
import BarDesign from "../components/barDesign.vue";
import router from "@/router";
import manetteEspaceJeux from '../assets/img/manetteEspaceJeux.png';
import realitevirtuelle from '../assets/img/realite-virtuelle.png';
import gamesociete from '../assets/img/game-societe.png';
import vrEvent from '../assets/img/vrEvent.png';

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

<style>
.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}
</style>