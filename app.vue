<script lang="ts" setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";
import type { Toast } from "~/interfaces/Toast";

onMounted(() => {

  renderDocumentStyleRoot();

})

useHead({
  title: 'EduNexus'
});




</script>

<template>

  <div class="app">
    <transition name="select">
      <nuxt-page />
    </transition>
  </div>

  <Toast />
</template>

<style lang="scss">

</style>
