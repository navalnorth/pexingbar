<template>
    <button class="button shadow-xl" :style="buttonStyle">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { Props } from '@/types/types';
import { computed } from 'vue';

const props = defineProps<Props>()

const buttonStyle = computed(() => ({
    color: props.textColor,
    background: props.background
}))
</script>

<style scoped>
.button {
    height: 45px;
    cursor: pointer;
    border-radius: 4px;
    font-family: var(--orbitron);
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
}
</style>