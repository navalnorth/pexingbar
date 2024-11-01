<template>
    <div class="tout w-full h-20 ">
        <p class="marquee my-8 whitespace-nowrap overflow-hidden w-full">
            <span class="inline-block">
                arcade - snack - bar - jeux - arcade - snack - bar - jeux - arcade - snack - bar - jeux - 
                arcade - snack - bar - jeux - arcade - snack - bar - jeux - arcade - snack - bar - jeux -
            </span>
        </p>
    </div>
</template>

<style scoped>
.tout {
    background-color: #2D005D;
}
.marquee {
    color: rgb(255, 48, 76);
    font-family: var(--orbitron);
}
.marquee span {
    animation: marquee 17s linear infinite;
}
@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>
