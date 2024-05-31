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
  width: 80%;
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
  font-weight: 800;
  font-size: 1.2em;
}
</style>