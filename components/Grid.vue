<script setup lang="ts">


</script>

<template>
  <div class="grid-wrap">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-wrap {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-template-rows: auto;
}
</style>