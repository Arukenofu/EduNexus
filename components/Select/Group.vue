<script setup lang="ts">

</script>

<template>
  <ul class="options">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
:global(.options) {
  display: inline-block;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  list-style: none;
  border-radius: 6px;
  border: 1px solid var(--border);
  padding: 6px 12px 6px 6px;
  height: 150px;
  overflow: scroll;
  scrollbar-width: none;
  background-color: var(--bg);
  z-index: 1;

}


</style>