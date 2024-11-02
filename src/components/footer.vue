<template>
    <div class="tout relative px-8 py-4 top-">
        <div class="absolute right-4">
            <img src="./../assets/img/fleche.png" alt="" @click="scrollToTop">
        </div>
        <div>
            <img src="../assets/img/footerLogo.png" class="w-48">

        </div>

        <p class="font2 my-5">Bar a jeux atypique et moderne. Pour les <br> passionnes de jeux video,realite virtuelle
            et <br> jeux societe, seul, en famille ou entre amis.
        </p>
        <div class="flex items-center my-5 gap-3 font2">
            <img src="../assets/img/footerMaps.png" class="w-10">
            <p>46 place d'armes <br>
                59300 Valenciennes</p>

        </div>
        <div class="font text-sm tracking-wider">
            <p>HORAIRES ET INFOS</p>
        </div>

        <hr class="hr my-4">
        </hr>

        <p class="font2">OUVERT DE 7H A MINUIT,<br>
            DU MARDI AU SAMEDI
        </p>
        <div class="my-4 flex gap-4">
            <img src="../assets/img/footerX.png" class="w-10">
            <img src="../assets/img/footerFacebook.png" class="w-10">
            <img src="../assets/img/footerInsta.png" class="w-10">
            <img src="../assets/img/footerGit.png" class="w-10">
        </div>  
        <div class="flex items-center gap-8">
            <img src="../assets/img/footerTwitch.png" class="w-28 mt-4">
            <img src="../assets/img/footerAsus.png" class="w-28 mt-4">
                
        </div>
        
        <div class="flex flex-wrap justify-left my-6  gap-5">
            <div class="font2 mr-6">
                <p class="font">PEXING BAR</p>
                <p>Le concept</p>
                <p>Le bar</p>
                <p>Nos espaces jeux</p>
                <p>Nos événements</p>
                <p>Wall of fame</p>
            </div>
            <div class="font2 mr-4">
                <p class="font">AIDE</p>
                <p>Reservations</p>
                <p>Mon compte</p>
                <p>Nous contacter</p>
            </div>
            <div class="font2 mr-16">
                <p class="font">Liens utiles</p>
                <p>Reglement interieur</p>
                <p>Mentions legales</p>
                <p>Conditions generales de vente</p>
                <p>Politique de confidentialité</p>
            </div>
        </div>

        <p class="font2 mt-12">
            © Copyright 2024,  <br>
            Tous droits reserves. Reproduction interdite <br>
            Site cree par Madame Krevette. 
        </p>
    </div>

</template>

<script setup>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
<style scoped>
.tout {
    color: white;
}

.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futura);
}

.hr {
    background: var(--ligne);
    height: 1px;
    width: 60vw;
    margin-top: 15px;
    border: 0;
}
</style>