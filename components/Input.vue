<script setup lang="ts">

const model = defineModel<string>('model')

</script>

<template>
  <div class="input-outer">
    <Icon name="iconoir:search" class="search" size="1.3em" />
    <input type="text" placeholder="Поиск..." v-model="model">
  </div>
</template>

<style scoped lang="scss">
.input-outer {
  padding: 0 9px;
  width: 100%;
  height: 45px;
  border: var(--border) 1px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
  background-color: var(--bg);

  input {
    background: none;
    border: none;
    margin-left: 9px;
    color: var(--text);
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: .85em;

    &::placeholder {
      color: var(--text-secondary);
    }
  }

  &:hover {
    background-color: var(--border);

    input {
      color: var(--text);

      &::placeholder {
        color: var(--text);
      }
    }
  }

  .search {
    color: var(--text-secondary);
  }

  span {
    font-size: .85em;
    margin-left: 9px;
    color: var(--text-secondary);
    user-select: none;
  }
}
</style>