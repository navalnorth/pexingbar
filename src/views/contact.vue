<template>
    <div>
        <div>
            <img src="../assets/img/contact.png" class="w-full">
            <p class="ban text-white text-2xl absolute top-32 ml-14">
                Vous avez un<br>
                <span>message</span> à<br>
                nous envoyer ?
            </p>
        </div>

        <div class="ml-8 mt-4">
            <p class="text-white ban">
                Utilisez le formulaire ci-dessous et<br>
                nous vous répondrons dans les plus<br>
                brefs délais.
            </p>
        </div>

        <form class="mt-8 px-12 flex flex-col gap-2 items-center">
            <div class="flex gap-2 w-full">
                <input v-model="nom" class="input rounded-md w-full" type="text" placeholder="Nom">
                <input v-model="prenom"  class="input rounded-md w-full" type="text" placeholder="Prénom">
            </div>
            <input v-model="email" class="input rounded-md w-full" type="email" placeholder="Email">
            <input v-model="num" class="input rounded-md w-full" type="text" placeholder="Phone Number">
            <textarea v-model="text" class="input rounded-md w-full" placeholder="Message" rows="4"></textarea>

            <div v-if="succes">
                <p class="text-green-500">
                    {{ succes }}
                </p>
            </div>
            <Btn @click.prevent="envoyer" textColor="var(--bleu)" background="var(--blanc)" class="mb-4 font-black py-4 px-16 mt-8">
                Envoyer<br /> mon message
            </Btn>
        </form>

        <div>
            <Avis/>
        </div>

        <div>
            <BarDesign />
        </div><br/>
    </div>
</template>
 
<script setup>
import Btn from "../components/btn.vue";
import Avis from "../components/avis.vue";
import BarDesign from "../components/barDesign.vue";
import { ref } from "vue";

const succes = ref('')

const nom = ref('')
const prenom = ref('')
const email = ref('')
const num = ref('')
const text = ref('')

const envoyer = () => {
    succes.value = 'Message envoyé !';
    nom.value = '';
    prenom.value = '';
    email.value = '';
    num.value = '';
    text.value = '';
}
</script>

<style scoped>
.ban {
    font-family: var(--futura);
}

.ban span {
    font-family: var(--futuraBold);
}
.input {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 192, 203, 0.1);
    backdrop-filter: blur(10px);
    padding: 10px;
}
.input::placeholder {
    font-family: var(--orbitron);
}
</style>
