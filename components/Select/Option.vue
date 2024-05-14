<script setup lang="ts">

</script>

<template>
  <li class="option">
    <slot />
  </li>
</template>

<style scoped lang="scss">

.option {
  padding: 6px 18px;
  background-color: var(--bg);

  &:hover {
    background-color: var(--bg-secondary);
    border-radius: 4px;
  }
}

</style>