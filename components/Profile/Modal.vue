<script setup lang="ts">

const isOpen = defineModel<boolean>('isOpen');

</script>

<template>
  <div class="modal">
    <div class="control">

      <button @click="isOpen = false">
        Закрыть
        <Icon class="icon" name="ic:baseline-close" size="1.4em" />
      </button>
    </div>

    <div class="content">
      <h1>Личные Данные</h1>

      <p>Добавьте информацию о себе в той форме, в которой она должна отображаться в профиле.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.modal {
  width: 525px;
  height: 70dvh;
  border-radius: 8px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  padding: 16px;
  overflow-y: hidden;

  .control {
    width: 100%;
    height: 40px;
    background-color: var(--bg);

    button {
      display: block;
      margin-left: auto;
      height: 90%;
      padding: 0 12px;
      background: none;
      border: none;
      color: var(--text);
      font-size: .8em;
      font-weight: 600;

      .icon {
        position: relative;
        bottom: 1px;
      }

      &:hover {
        text-decoration: underline;
        background-color: var(--border);
        border-radius: 4px;
      }
    }
  }

  .content {
    overflow-y: scroll;
    height: calc(70dvh - 40px - 20px);
    padding: 0 24px;

    h1 {
      font-size: 1.7em;
      font-weight: 700;
      margin-bottom: 21px;
    }

    p {
      font-size: .95em;
      font-weight: 400;
      line-height: 1.5;
    }
  }
}

</style>