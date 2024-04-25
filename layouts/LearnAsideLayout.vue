<script setup lang="ts">

import Button1x1 from "~/components/Buttons/Button1x1.vue";

const isMenuActive = defineModel<boolean>('isMenuActive');

</script>

<template>
  <div class="aside" :class="isMenuActive && 'menu-active'">

    <button1x1
      icon-name="iconoir:menu"
      class="aside-menu"
      title="Меню"
      @click="isMenuActive =! isMenuActive"
    />

    <slot />

  </div>
</template>

<style scoped lang="scss">
.menu {
  width: 35%;

  .aside-menu {
    display: none;
  }
}

.aside {
  width: 35%;
}

.aside-menu {
  display: none;
}

@media screen and (max-width: 1200px) {
  .aside {
    background-color: var(--bg);
    min-height: calc(100vh - 30px);
    position: fixed;
    top: 0;
    right: -35%;
    width: 35%;
    transition: right 0.5s ease-out;
    overflow-y: scroll;
    max-height: 100%;

    .aside-menu {
      margin-top: 6px;
      display: block !important;
      transition: right 0.5s ease-in;
    }

    .date {
      margin-bottom: 0;
    }

    .card {

      .course {
        height: 60px;
      }
    }
  }
  .menu-active {
    right: 0;
  }
}
</style>