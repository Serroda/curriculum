<template>
    <div ref="divContainer" class="perspective-30px">
        <div ref="divInner" class="relative inner">
            <div class="gradient gray top--40px right--50px"></div>
            <div class="gradient dark left--80px top-50px"></div>

            <Box :corners="2">
                <template #content>
                    <img class="m-50px" src="../assets/images/me.jpg" height="356" width="267">
                </template>
            </Box>
        </div>
    </div>
</template>
<script setup lang="ts">
const mouseTransformAnimation = useMouseTransformAnimation();
const divContainer: Ref<HTMLDivElement | null> = ref(null);
const divInner: Ref<HTMLDivElement | null> = ref(null);
onMounted(() => {
    if (!divContainer.value || !divInner.value) return;
    mouseTransformAnimation.init(divContainer.value, divInner.value);
    mouseTransformAnimation.setTriggers();
})
</script>

<style scoped>
.inner {
    transition: transform .4s;
}

</style>