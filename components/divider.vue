<template>
    <div class="divider observing">
        <label v-if="text">{{ text }}</label>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    text?: string
}>()
</script>

<style scoped>
.divider {
    width: 0%;
    opacity: 0;
    height: 2px;
    background: hsl(var(--color-5));
    position: relative;
}

.divider.invert-color {
    background: hsl(var(--color-6));
}

.divider label {
    position: absolute;
    right: 15px;
    top: 10px;
    opacity: 0;
}

.divider:after,
.divider::before {
    content: " ";
    position: absolute;
    width: 50px;
    height: 0px;
    border: 4px solid hsl(var(--color-3));
    right: 0;
}

.divider.invert-color:after,
.divider.invert-color::before {
    border: 4px solid hsl(var(--color-8));
}


.divider::before,
.divider.divider.invert-color::before {
    bottom: -1px;
    border-top: none;
    border-left: none;
}

.divider::after,
.divider.invert-color:after {
    top: -1px;
    border-bottom: none;
    border-left: none;
}

.divider.visible {
    width:100%;
    opacity: 1;
    transition: width 1s, opacity .4s;
}

.divider.visible label {
    transition: opacity .2s 1.1s;
    opacity: 1;
}

.divider.visible::after,
.divider.visible::before {
    transition: height .2s 1.1s;
    height: 25px;
}
</style>