<script setup lang="ts">

</script>

<template>
  <div class="selected-option">
    <slot />

    <Icon name="iconoir:nav-arrow-down" />
  </div>
</template>

<style scoped lang="scss">
.selected-option {
  background-color: var(--bg);
  border: 1px solid var(--border);
  padding: 9px 12px;
  border-radius: 6px;
  font-size: .9em;
  user-select: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: color .15s var(--transition-function), border .15s var(--transition-function), background-color .15s var(--transition-function);

  svg {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>