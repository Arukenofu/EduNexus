<script setup lang="ts">

interface Buttons {
  id: number,
  value: string
}

const buttons: Buttons[] = [
  {
    id: 1,
    value: 'Все'
  },
  {
    id: 2,
    value: 'Непрочитанные'
  }
]

const state = defineModel<number>('state');

</script>

<template>
  <div class="recent">
    <button
      v-for="button in buttons"
      :key="button.id"
      @click="state = button.id"
      :class="state === button.id && 'active'"
    >
      {{button.value}}
    </button>
  </div>
</template>

<style scoped lang="scss">
.recent {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg);
  padding: 4px 4px;
  border-radius: 9px;
  gap: 2px;
  animation: 1s;
  border: 1px solid var(--border);

  button {
    border-radius: 6px;
    height: 100%;
    padding: 0 18px;
    border: none;
    color: var(--text);
    font-weight: 700;
    background-color: var(--bg);
  }

  .active {
    background-color: var(--bg-secondary);
  }
}
</style>