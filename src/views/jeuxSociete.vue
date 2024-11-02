<template>
    <div class="text-white flex flex-col ">
        <div class="bgc w-full flex flex-col py-4 items-center">
            <p class="font text-3xl py-4 uppercase">JEUX DE SOCIETE</p>
            <p class="font2 text-base ">Passionnes de jeux de societe, seul, en <br>famille 
                ou entre amis, chez Pexing Bar <br> vous
                trouverez forcement de quoi vous<br> amuser 
                et partager un bon moment !
            </p>
        </div>

        <div>
            <img src="./../assets/img/societe.jpg" alt="">
        </div>

        <div class="font2  m-6 text-center">
            <p class="font">Salles privatives et collectives</p>
            <p>Consoles derniere generation <br>
                Equipement haute technologie <br>
                Entre amis ou en reseau</p>
        </div>
        <div class="font2 bgh w-full text-center py-2 ">
            <p>
                1 HEURE MINIMUM <br>
                4 JOUEURS MAXIMUM <br>
                PARTIES ILLIMITEES

            </p>
        </div>
        <Btn textColor="var(--bleu)" background="var(--blanc)" class="font-black m-6 py-4 p-8">
            réserver
        </Btn>

        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/societe-image.jpg" alt=""></div>
        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/societe-image2.jpg" alt=""></div>
        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/societe-image3.jpg" alt=""></div>

        <div>
            <Avis />
        </div>
        <div>
            <EventGame image="src/assets/img/societe-image4.jpg">
                <template #title>EVENEMENTS JEUX DE SOCIETE</template>
                <template #subtitle>SOIREE SPECIALE <br> UNO</template>
                <template #description>
                    Venez vous affrontez au jeu de cartes  <br />
                    mythique ! De nombreux cadeaux à <br />
                    gagner. Tentez le défi ! 
                </template>
                <template #maxPlayers>1 joueurs</template>
                <template #gameDuration>de 14h a 16h</template>
                <template #eventDate>13 decembre 2024</template>
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
</script>

<style>
.gameimage {
    height: 250px;
    width: 100%;
    display: flex; /* Centre le contenu horizontalement */
    justify-content: center;
    overflow: hidden; /* Active l'overflow */
}

.imggame {
    height: 100%;
    width: 100%; /* Permet à l'image de conserver son ratio d'origine */
    object-fit: cover; /* Ajuste l'image pour remplir l'espace sans distorsion */
}
.bgc {
    background: var(--gradRougeBan);
}

.bgh {
    background-color: rgba(247, 247, 247, 0.09);
}

.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}
</style>