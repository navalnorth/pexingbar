<template>
    <div class="text-white flex flex-col ">
        <div class="bgc w-full flex flex-col py-4 items-center">
            <p class="font text-3xl py-4 uppercase">JEUX VIDEO</p>
            <p class="font2 text-base ">Passionnés de jeux video, seul, en famille <br>
                 ou entre amis, chez Pexing Bar vous <br>
                  trouverez forcement de quoi vous amuser <br>
                   et partager un bon moment ! 
            </p>
        </div>

        <div>
            <img src="./../assets/img/game.jpg" alt="">
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

        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/game-image.jpg" alt=""></div>
        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/game-image2.jpg" alt=""></div>
        <div class="my-6 gameimage"><img class="imggame" src="./../assets/img/game-image3.jpg" alt=""></div>

        <div>
            <Avis />
        </div>
        <div>
            <EventGame :image="STREET">
                <template #title>EVENEMENTS JEUX VIDEO</template>
                <template #subtitle>TOURNOI <br> Street Fighter</template>
                <template #description>
                    Preparez-vous a des duels epiques sur <br>
                     écran geant ! Defiez d’autres joueurs, <br>
                      remportez des prix, et profitez de <br>
                       l’ambiance survoltee. <br><br>
                       Cosplay bienvenu pour incarner <br> votre champion !
                </template>
                <template #maxPlayers>1 joueurs</template>
                <template #gameDuration>a partir de 20h</template>
                <template #eventDate>12 decembre 2024</template>
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
import Avis from "../components/avis.vue";
import EventGame from "../components/eventGame.vue";
import BarDesign from "../components/barDesign.vue";
import STREET from '../assets/img/STREET.png';


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