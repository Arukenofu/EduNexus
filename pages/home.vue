<script setup lang="ts">

</script>

<template>
  <HeaderComponent />
  <NavBar />

  <div class="content">
    <nuxt-page />
  </div>

</template>

<style scoped lang="scss">

.content {
  padding: var(--content-padding);
}

</style>