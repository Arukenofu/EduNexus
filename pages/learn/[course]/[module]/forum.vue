<script setup lang="ts">
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";

const sortButtonState = ref<number>(0);
const dateButtonState = ref<number>(5);



</script>

<template>
  <LearnHeaderLayout text="Форум">
    <template v-slot:first>
      <ButtonsDate v-model:state="dateButtonState" />
      <ButtonsSort v-model:state="sortButtonState" />
    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">
    <div class="main">

    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  width: 100%;
  gap: 18px;

  .main {
    flex: 1;
    flex-shrink: 0;
  }

  .menu {
    max-height: 100vh;

    select {
      background-color: var(--bg);
      width: 100%;
      border: none;
      height: 35px;
      border-radius: 4px;
      color: var(--text);
      padding: 9px 18px;

    }
  }
}

.control {
  display: none;
}

@media screen and (max-width: 1200px) {
  .control {
    display: initial;
  }
}
</style>