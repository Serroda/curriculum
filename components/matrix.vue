<template>
    <div class="matrix" :style="'width: calc(22px * '+ columns +')'">
        <div class="dot" v-for="dot in dots" :key="dot"></div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    dots: number,
    columns: number
}>()
</script>

<style scoped>
.matrix {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.dot {
    width: 16px;
    height: 16px;
    border-radius: 100%;
}

.dot:nth-child(odd){
    background: hsl(var(--color-8));
    animation: blink .6s infinite alternate ease-out;
}
.dot:nth-child(even){
    background: hsl(var(--color-9));
    animation: blink .6s infinite alternate-reverse ease-out;
}

@keyframes blink {
    from{
        background: hsl(var(--color-8));
    }
    to{
        background: hsl(var(--color-9));
    }
}
</style>