<script lang="ts" setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";
import type { Toast } from "~/interfaces/Toast";

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
});

const {data} = await useAPI('/courses/Golang programming/modules');



</script>

<template>
  <TitleBar v-if="isElectron" />

  <div class="app">
    <transition name="select">
      <nuxt-page />
    </transition>
  </div>

  <Toast />
</template>

<style lang="scss">

</style>
