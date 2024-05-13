<script setup lang="ts">

</script>

<template>
  <PaginationItem class="ellipsis">
    <span>
      ...
    </span>
  </PaginationItem>
</template>

<style scoped lang="scss">
.ellipsis {
  pointer-events: none;
  user-select: none;

  span {
    position: relative;
    bottom: 4px;
    user-select: none;
  }
}
</style>