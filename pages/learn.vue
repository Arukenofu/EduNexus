<script setup lang="ts">
import { useGsap } from "#imports";

onMounted(() => {
  const gsap = useGsap();
})

</script>

<template>
  <div class="container">

    <LearnAside />

    <main>
      <nuxt-page />
    </main>

  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;

  main {
    padding-left: calc(25% + 21px);
    padding-right: 21px;
    width: 100%;
    min-height: calc(100dvh - 30px);
    background-color: var(--bg);

    .content {
      padding: 0 21px;
      min-height: 100vh;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container main {
    padding-left: calc(30% + 21px);
  }
}
</style>