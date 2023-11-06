<template>
    <div class="box">
        <div class="corner" :class="'p' + corner" v-for="corner in corners" :key="corner"></div>
        <slot name="content" />
    </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    corners?: number
}>(), {
    corners: 0
});
</script>

<style scoped>
.box {
  outline: 2px solid hsl(var(--color-8));
  position: relative;
  width: auto;
  height: auto;
}
.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 5px solid hsl(var(--color-2));
}
.corner.p1 {
  right: -3px;
  top: -3px;
  border-bottom: transparent;
  border-left: transparent;
}

.corner.p2 {
  left: -3px;
  bottom: -3px;
  border-top: transparent;
  border-right: transparent;
}

.corner.p3 {
  left: -3px;
  top: -3px;
  border-bottom: transparent;
  border-right: transparent;
}

.corner.p4 {
  right: -3px;
  bottom: -3px;
  border-top: transparent;
  border-left: transparent;
}

</style>