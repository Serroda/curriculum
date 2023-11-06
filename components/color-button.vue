<template>
    <div class="flex mt-50px justify-end items-center gap-20px">
        <div class="text-right">
            <label>COLOR</label>
            <p class="mb-0">Cambia el color del tema</p>
        </div>

        <Box >
            <template #content>
                <input class="color-selector" type="color">
            </template>
        </Box>
    </div>
</template>

<style scoped>
.color-selector{
    width: 60px;
    height: 60px;
    margin: 20px;
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
}
</style>