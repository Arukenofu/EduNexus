<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";

const route = useRouteParams();
</script>

<template>
  <div class="controls">
    <button @click="$router.push(`/learn/${route.course}/`)">
      <Icon
        name="solar:arrow-left-outline"
        size="1.2em"
        class="icon"
      />
      Назад
    </button>

    <button @click="toggleTheme()">
      Сменить тему
    </button>
  </div>
</template>

<style lang="scss">
.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;

  button {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: .95em;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color var(--transition-function) .35s;

    &:focus-visible, &:hover {
      border: none;
      outline: none;
      color: var(--text);
    }

    .icon {
      position: relative;
    }
  }
}
</style>