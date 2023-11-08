<template>
    <div class="flex mt-50px justify-end items-center gap-20px">
        <div class="text-right">
            <label>COLOR</label>
            <p class="mb-0">Cambia el color del tema</p>
        </div>

        <Box animation class="cursor-pointer" @click="colorInput?.click()">
            <template #content>
                <input ref="colorInput" class="color-selector" v-model="colorSelected" type="color">
            </template>
        </Box>
    </div>
</template>

<style scoped>
.color-selector {
    width: 60px;
    height: 60px;
    margin: 20px;
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
}
</style>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const colorTheme = useColorTheme()
const colorSelected = ref(runtimeConfig.public.defaultColorInput);
const colorInput: Ref<HTMLInputElement | null> = ref(null)

onMounted(() => {
    if (!colorInput.value) return;
    colorInput.value.onchange = () => {
      colorTheme.setColor(colorSelected.value)
    }
})


</script>