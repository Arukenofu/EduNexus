<script setup lang="ts">

const isMobile = useDevice();

</script>

<template>
  <button class="create">
    <Icon name="material-symbols:add" size="1.25em" />
    {{!isMobile && 'Создать' || ''}}
  </button>
</template>

<style scoped lang="scss">
.create {
  background-color: #6161cc;
  border: none;
  padding: 9px 12px;
  color: var(--text);
  border-radius: 6px;
  font-size: .9em;
  display: flex;
  align-items: center;
  gap: 3px;
}

@media screen and (max-width: 768px) {
  .create {
    padding: unset;
    aspect-ratio: 1/1;
    height: 35.6px;
    display: grid;
    place-items: center;
  }
}

</style>