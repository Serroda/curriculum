<template>
    <div class="tag">
        <span>{{ text }}</span>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        text:string
    }>()
</script>
<style scoped>

.tag{
    display: flex;
    color: hsl(var(--color-3));
    background: hsl(var(--color-9));
    width: fit-content;
    transition: background .4s;
}

.tag:hover{
    background: hsl(var(--color-7));
}

.tag span{
    margin: 5px 20px;
}

</style>