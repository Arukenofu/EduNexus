<script lang="ts" setup>

import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

onMounted(() => {
  renderDocumentStyleRoot()
})

useHead({
  title: 'EduNexus'
});




</script>

<template>

  <div class="app">
    <nuxt-page />
  </div>

  <Toast />
</template>

<style lang="scss">

</style>
