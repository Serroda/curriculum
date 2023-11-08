<template>
    <div ref="divContainer" class="perspective-30px">
        <div ref="divInner" class="relative">
            <div class="gradient gray top--40px right--50px"></div>
            <div class="gradient dark left--80px top-50px"></div>

            <Box :corners="2">
                <template #content>
                    <img class="m-50px size-profile" src="../assets/images/me.jpg" />
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

