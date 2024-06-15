<script setup lang="ts">

</script>

<template>
  <div class="nodata">
    ¯\_(ツ)_/¯

    <span>
      К сожалению пусто.
    </span>
  </div>
</template>

<style scoped lang="scss">
.nodata {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
  color: var(--text-secondary);
  padding: 12px;
  grid-column: 1/-1;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>