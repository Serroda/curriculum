<template>
  <div class="box">
    
    <div class="corner animation" v-if="animation" :class="'p' + corner" v-for="corner in 4" :key="corner"></div>
    <div class="corner" :class="'p' + corner" v-for="corner in corners" :key="corner"></div>
    <div class="z-1">
      <slot name="content"  />
    </div>
  
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  corners?: number,
  animation?: boolean
}>(), {
  corners: 0,
  animation: false
});
</script>

<style scoped>
.box {
  outline: 2px solid hsl(var(--color-8));
  position: relative;
  width: auto;
  height: auto;
}

.box:hover .corner.animation {
  display: block;
  opacity: 1;
  width: 51%;
  height: 51%;
}

.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 5px solid hsl(var(--color-2));
}

.corner.animation {
  opacity: 0;
  width: 0;
  height: 0;
  border: 2px solid hsl(var(--color-2));
  transition: opacity .8s, width .8s, height .8s;
  
}

.corner.p1 {
  right: -3px;
  top: -3px;
  border-bottom: none;
  border-left: none;
}

.corner.p2 {
  left: -3px;
  bottom: -3px;
  border-top: none;
  border-right: none;
}

.corner.p3 {
  left: -3px;
  top: -3px;
  border-bottom: none;
  border-right: none;
}

.corner.p4 {
  right: -3px;
  bottom: -3px;
  border-top: transparent;
  border-left: transparent;
}
</style>