<template>
    <div class="container-small-card" @click="openLink(link)">
        <div class="small-card">
            <img :src="'./images/' + image" height="25">
        </div>
        <span class="text-small-card mt-12px">{{ name }}</span>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    image: string,
    name: string,
    link: string
}>()

function openLink(link: string) {
    window.open(link, "_blank")
}
</script>

<style scoped>
.container-small-card {
    cursor: pointer;
    width: 76px;
    height: 110px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.small-card {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-blue-2);
    border: 2px solid var(--blue-4);
    border-radius: 10px;
    transition: transform .2s;
}

.container-small-card:hover .small-card{
    transform: scale(1.15);
    background: radial-gradient(var(--blue-5),var(--dark-blue-2));
}

.text-small-card{
    transition: color .2s;
}
.container-small-card:hover .text-small-card{
   color: var(--green-1)
}

</style>