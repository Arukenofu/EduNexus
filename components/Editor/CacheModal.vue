<script setup lang="ts">

defineEmits(['onExit', 'onContinue'])

</script>

<template>
  <div class="modal">
    <h3>У вас есть незавершённая работа.</h3>
    <p>Хотите его продолжить?</p>

    <div class="buttons">
      <button class="exit" @click="$emit('onExit')">
        Выйти
      </button>

      <button class="continue" @click="$emit('onContinue')">
        Продолжить
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  width: 550px;
  aspect-ratio: 1/.35;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  padding: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6em;
    margin-bottom: 9px;
  }

  p {
    color: var(--text-secondary);
  }

  .buttons {
    margin-top: auto;
    display: flex;
    justify-content: space-between;

    button {
      padding: 9px 21px;
      font-size: .9em;
      font-weight: 600;
      background-color: var(--text);
      color: var(--bg);
      border: none;
      border-radius: 4px;
    }
  }
}
</style>