<script setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

const isError = useState('isError', () => '')

onMounted(() => {

  renderDocumentStyleRoot();

  if (isElectron) {
    document.documentElement.style.setProperty('--electron', '30px');
  } else {
    document.documentElement.style.setProperty('--electron', '0px');
  }

})

const {isElectron} = useUpdater();

</script>

<template>
  <TitleBar v-if="isElectron" />

  <div class="app">
    <nuxt-page />
  </div>

  <ErrorToast />
</template>

<style lang="scss">
.app {
  top: 0;
  position: relative;
  height: 100vh;
}
</style>
