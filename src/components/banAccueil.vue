<template>
    <div class="tout h-80 w-full">
        <div class="flex flex-col justify-center text-left ml-8">
            <div class="mt-8">
                <p class="font2 text-left uppercase leading-none text-4xl">joue<span class="gradient">z</span></p>
                <p class="font text-left uppercase leading-none text-4xl text-white">mangez</p>
                <p class="font text-left uppercase leading-none text-4xl text-white">partagez</p>
            </div>
        </div>

        <div class="flex justify-center items-center gap-2 px-4 mt-16 text-white">
            <button class="bouton text-center py-1 rounded-md opacity-90 uppercase">jeux video</button>
            <button class="bouton text-center py-1 rounded-md opacity-90 uppercase">réalté virtuelle</button>
            <button class="bouton text-center py-1 rounded-md opacity-90 uppercase">jeux de société</button>
        </div>

    </div>
</template>


<script setup lang="ts">

</script>

<style scoped>
.tout {
    background: var(--gradRougeBan);
    position: relative;
    z-index: 1;
}

.tout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    opacity: 0.1;
    backdrop-filter: blur(50%);
    z-index: -1;
}

.font {
    font-family: var(--futuraBold);
}

.font2 {
    font-family: var(--futuraBold);
    color: #FF304C;
}

.gradient {
    background: var(--gradRougeBanZ);
    background-clip: text;
    color: transparent;
    opacity: .7;
}

.bouton {
    font-family: var(--orbitron);
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-size: 10px;
}

.bouton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    opacity: 0.12;
    backdrop-filter: blur(20px);
    z-index: -1;
    border-radius: inherit;
}

.bouton::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: inherit;
}
</style>