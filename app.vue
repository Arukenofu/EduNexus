<script setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

onMounted(() => {

  renderDocumentStyleRoot();

})

const {isElectron} = useUpdater();

</script>

<template>
  <TitleBar v-if="isElectron" />

  <div class="app">
    <nuxt-page />
  </div>
</template>

<style lang="scss">
.app {
  position: relative;
  min-height: calc(100dvh - 30px);
}
</style>
