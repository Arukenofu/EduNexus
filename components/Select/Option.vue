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
  font-size: .9em;
  border-radius: 4px;
  transition: color .15s var(--transition-function), border .15s var(--transition-function), background-color .15s var(--transition-function);

  &:hover {
    background-color: var(--bg-secondary);
  }
}

</style>