<template>
    <div class="tout">
        <BanAccueil />
        <div class="tout py-4">
            <p class="font text-center text-white text-3xl">PLUS DE 300m²</p>
            <p class="font2 text-center text-white text-md leading-none font-bold">
                POUR JOUER EN FAMILLE <br /> OU ENTRE AMIS
            </p>
        </div>

        <img src="../assets/img/homePc.png" class="w-full">

        <div class="tout p-4 flex flex-col justify-center items-center">
            <Btn textColor="var(--bleu)" background="var(--blanc)" class="font-black py-4 p-24">
                réserver<br /> une partie
            </Btn>
            <Btn textColor="var(--blanc)" background="var(--blanc20)" class="mt-6 py-4 px-16">
                + d'infos
            </Btn>
        </div>

        <div>
            <TextAnimation/>
        </div>
        <div>
            <BanEspaceJeux image="./../assets/img/manetteEspaceJeux.png">Nos espaces jeux</BanEspaceJeux>
        </div>
        <div>
            <Avis/>
        </div>

        <div>
            <EventGame image="../assets/img/vrEvent.png">
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
        </div><br/>
    </div>
</template>


<script lang="ts" setup>
import BanAccueil from "../components/banAccueil.vue";
import Btn from "../components/btn.vue";
import Avis from "../components/avis.vue";
import TextAnimation from "../components/textAnimation.vue";
import BanEspaceJeux from "../components/banEspaceJeux.vue";
import EventGame from "../components/eventGame.vue";
import BarDesign from "../components/barDesign.vue";


</script>


<style scoped>
.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}
</style>