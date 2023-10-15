<template>
    <div class="w-76px h-110px flex items-center flex-col">
        <div class="card">
            <img :src="'./' + image">
        </div>
        <span class="mt-6px">{{ name }}</span>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    image: string,
    name: string
}>()
</script>

<style scoped>
.card{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-blue-2);
    border: 2px solid var(--blue-4) ;
    border-radius: 10px;
}
</style>