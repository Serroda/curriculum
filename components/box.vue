<template>
    <div class="box">
        <div class="corner" :class="'p' + corner" v-for="corner in corners" :key="corner"></div>
        <slot name="content" />
    </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    corners: number
}>(), {
    corners: 0
});
</script>