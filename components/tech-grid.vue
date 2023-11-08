<template>
    <div class="tech-grid flex flex-wrap observing relative w-100%">
       
        <Box :corners="4" animation v-for="tech in technologies" @click="emit('clickItem', tech.link)" class="cursor-pointer">
            <template #content>
                <div class="m-40px mb-20px flex flex-col items-center">
                    <img :src="'./assets/images/' + tech.image" width="120" height="140">
                    <Tag class="mt-20px z-2" :text="tech.name" />
                </div>
            </template>
        </Box>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    technologies: { link: string, image: string, name: string }[]
}>()
const emit = defineEmits<{
    (event: 'clickItem', link: string): void
}>()
</script>

<style scoped>
.tech-grid {
    opacity: 0;
    padding-top: 50px;
    gap: 94px;
}

.tech-grid.visible {
    opacity: 1;
    padding-top: 0px;
    transition: opacity .8s, padding .8s;
}
</style>