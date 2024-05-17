<script lang="ts" setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";
import type { Toast } from "~/interfaces/Toast";

const toast = useState<Toast | string>('toast', () => '')

onMounted(() => {

  renderDocumentStyleRoot();

  if (isElectron) {
    document.documentElement.style.setProperty('--electron', '30px');
  } else {
    document.documentElement.style.setProperty('--electron', '0px');
  }

})

const {isElectron} = useUpdater();

useHead({
  title: 'EduNexus'
})

</script>

<template>
  <TitleBar v-if="isElectron" />

  <div class="app">
    <nuxt-page />
  </div>

  <Toast />
</template>

<style lang="scss">

</style>
