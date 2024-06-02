<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  border-radius: 14px;
  background-color: var(--bg-fourth);
  padding: 16px 16px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,.1), 0 3px 7px -1px rgba(0,0,0,.1);
}
</style>