<script setup lang="ts">

defineProps<{
  icon: string,
}>()

</script>

<template>
  <button>
    <Icon :name="icon" size="1.1rem"  />
  </button>
</template>

<style scoped lang="scss">

button {
  background-color: var(--bg);
  border: none;
  width: 35px;
  aspect-ratio: 1/1;
  color: var(--text-soft);
  transition-property: background-color, color  ;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;

  &:hover {
    background-color: var(--bg-secondary);
  }

  &:disabled {
    color: var(--text-secondary);
    user-select: none;
    pointer-events: none;
  }
}

.is-active {
  background-color: var(--text);
  color: var(--bg);

  &:hover {
    background-color: var(--text);
  }
}

</style>