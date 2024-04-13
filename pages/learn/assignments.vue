<script setup lang="ts">
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";
import AssignmentComponent from "~/components/Assignments/AssignmentComponent.vue";

</script>

<template>
  <div class="header">

    <h1>Задания</h1>

    <div class="options">

      <button1x1 class="control" title="Переключить тему" :iconName="themeConditionalState()" @click="toggleTheme()" />

      <button1x1 class="control" title="Выйти" icon-name="iconoir:log-out" @click="$router.push('/home/main')" />

    </div>

  </div>

  <div class="content-wrapper">

    <AssignmentComponent
      type="Задание"
      name="Создание собственного приложения JavaScript"
      date="1 Апреля"
    />

  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 90px;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
  }

  .options {
    margin-left: auto;

    .control {
      margin-left: 9px;
      background-color: var(--bg);
      border: none;
      cursor: pointer;
      height: 40px;
      aspect-ratio: 1/1;
      border-radius: 6px;

      .icon {
        color: var(--text);
      }
    }

    .menu {
      display: none;
    }
  }
}

.content-wrapper {
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .content-wrapper .lesson {
    width: 100%;
  }
}
</style>