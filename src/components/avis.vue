<template>
    <div class="flex flex-col items-center tout ">
        <div class="imagev ">
            <!-- <img class="h-44 opacity-70 m-4  " src="./../assets/img/v.png" alt=""> -->
            <p class="font2  text-center text-white text-5xl  tracking-widest leading-none font-bold">
                RELEVEZ
            </p>
            <p class="font text-center text-white text-3xl leading-none font-bold">
                LE DEFI !
            </p>
        </div>
        <div>
          <p class="font text-center text-white text-4xl">ILS L’ONT TESTE</p>
        </div>
        <div class="h-auto flex flex-col items-center w-4/5 card p-2 my-8 mb-16 rounded-md">
            <div class="flex text-white m-5">
                <AnFilledStar/><AnFilledStar/><AnFilledStar/><AnFilledStar/><AnFilledStar/>
            </div>
            <p class="text-white font2 text-center text-xl">
                “ Super aprem avec mes potes ! <br>je reviendrais c’est sur ! “
            </p>
            <hr class="hr">
            </hr>
            <div class="flex text-white gap-5 p-2 items-center">
                <img class="h-8" src="./../assets/img/avish.png" alt="">
                <div class=" ">
                    <p class="font text-xl">James Dean</p>
                    <p class="font2">Realite virtuelle</p>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons';
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
.card{
    background: linear-gradient(0deg, rgba(255, 0, 34, 0.1) 0%, rgb(0, 0, 0, 0.1) 150% );
    border: 1px solid rgb(255, 192, 203,0.2);
}

.hr {
   background: var(--ligne);
    height: 1px;
    width: 60vw;
    margin-top: 15px;
    border: 0;
}

.imagev {
    background-image: url("./../assets/img/v.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 180px;
    width: 60vw;
    margin: 20px;
    align-content: center;
}
</style>