<script setup lang="ts">

defineProps<{
  name: string,
  currentState: string
}>()

</script>

<template>
  <button class="filter">
    <span class="text">
      {{name}}
    </span>
    <span class="submenu">
      <span>{{currentState}}</span>
      <Icon name="iconoir:nav-arrow-right" size="1.2em" class="str2" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.filter {
  background-color: var(--bg);
  height: 55px;
  padding: 9px 18px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 6px;
  width: 100%;
  color: var(--text);
  border: none;
  user-select: none;

  &:hover {
    background-color: var(--bg-secondary);
  }

  .text {
    font-size: 1em;
    font-weight: 500;
  }

  .submenu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: .85em;
      color: var(--text-secondary);
    }

    .str2 {
      margin-left: 6px;
      color: var(--text-secondary);
    }
  }
}

@media screen and (max-width: 1200px) {
  .filter {
    border-radius: 0;
    border-bottom: 1px solid var(--bg-secondary);
    margin: 0;
  }
}
</style>