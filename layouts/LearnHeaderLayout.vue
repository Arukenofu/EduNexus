<script setup lang="ts">
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";
import Button1x1 from "~/components/Buttons/Button1x1.vue";

defineProps<{
  text: string
}>()
</script>

<template>
  <div class="header">

    <h1>{{text}}</h1>

    <div class="options">

      <slot name="first" />

      <button1x1
        class="control"
        title="Переключить тему"
        :iconName="themeConditionalState()"
        @click="toggleTheme()"
        color="var(--bg-secondary)"
      />

      <button1x1
        class="control str2"
        title="Выйти"
        icon-name="iconoir:log-out"
        text="var(--red)"
        color="var(--bg-secondary)"
        @click="$router.push('/home/main')"
      />

      <slot name="last" />

    </div>

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
    display: flex;
    gap: 4px;

    .control {
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


</style>