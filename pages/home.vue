<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => {
  loading.value = true;
  document.body.style.overflow = 'hidden';
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
  document.body.style.overflow = 'auto';
});


</script>

<template>
  <HeaderComponent />

  <div class="loading" v-if="loading">
    <span class="loader"></span>
  </div>


  <div class="content" :class="loading && 'content-loading'">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>

</template>

<style scoped lang="scss">

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .loader {
    width: 36px;
    height: 36px;
    border: 3px solid var(--text);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

}

.content {
  padding: var(--content-padding);
}

.content-loading {
  opacity: 0;
}

</style>