<script setup lang="ts">

</script>

<template>
  <HeaderComponent>

  </HeaderComponent>

  <NuxtLoadingIndicator color="var(--text)" :height="2" style="top: calc(60px + var(--electron))" />

  <div class="content" id="content">

    <nuxt-page />

  </div>

</template>

<style scoped lang="scss">


.content {
  padding: var(--content-padding);
}


</style>