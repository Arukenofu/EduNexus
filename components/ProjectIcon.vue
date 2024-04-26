<script setup lang="ts">

</script>

<template>
  <div class="icon">
    <nuxt-img
      src="/icon.png"
      width="28px"
      preload />
    <span>EduNexus</span>
  </div>
</template>

<style scoped lang="scss">
.icon {
  font-size: 1.3rem;
  font-weight: 900;
  user-select: none;
  display: flex;
  align-items: center;

  span {
    margin-left: 3px;
  }
}
</style>