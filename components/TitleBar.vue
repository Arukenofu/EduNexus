<script setup lang="ts">

</script>

<template>
  <div class="title">
    <p>EduNexus</p>
  </div>
</template>

<style scoped lang="scss">
.title {
  top: 0;
  position: sticky;
  height: 30px;
  background-color: #0f0f0f;
  -webkit-app-region: drag;
  user-select: none;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  z-index: 100;

  p {
    font-size: 16px;
    margin-left: 6px;
    font-weight: 700;
  }
}
</style>