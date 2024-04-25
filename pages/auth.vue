<script setup lang="ts">



</script>

<template>
  <div class="bg">

  </div>

  <div class="container">

    <AuthComponent />

    <div class="image-section">
      <nuxt-img src="/login-page.png" preload="preload" />
    </div>

  </div>
</template>

<style scoped lang="scss">

.bg {
  position: absolute;
  height: calc(100dvh);
  width: 100vw;
  background: linear-gradient(to right, #cce4ff 50%, #1e1f6f 50%);
}

.container {
  width: 1000px;
  height: 650px;
  border-radius: 15px;
  background: linear-gradient(to right, #ffffff 50%, #e6f2ff 50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  .image-section {
    width: 50%;
    height: 100%;
    position: relative;

    img {
      width: 135%;
      background: none;
      position: absolute;
      top: 47%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

}

@media screen and (max-width: 1100px) {
  .container {
    width: 100dvw;
    height: 100dvh;
    border-radius: 0;
  }
}

</style>