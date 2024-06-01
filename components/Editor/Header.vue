<script setup lang="ts">
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";
import Button1x1 from "~/components/Buttons/Button1x1.vue";

const isOpen = ref(false);

const form = ref({
  header: '',
  description: ''
});

const onStart = () => {
  form.value.header = document.getElementById('lectureHeader')?.textContent;

  isOpen.value = true
}

</script>

<template>
  <header>
    <ProjectIcon />

    <div class="controls">
      <button1x1
        class="toggleTheme control header-button"
        title="Переключить тему"
        :iconName="themeConditionalState()"
        @click="toggleTheme()"
        hover-color="none"
        color="none"
        text="var(--text)"
      />

      <button1x1
        class="exit header-button str2"
        title="Выйти"
        iconName="iconoir:log-out"
        @click=""
        color="none"
        text="var(--red)"
        hover-color="none"
      />

      <button1x1
        title="Отправить"
        class="header-button"
        icon-name="material-symbols:send-outline"
        color="var(--green)"
        text="#FFFFFF"
        @click="onStart()"
      />
    </div>
  </header>

  <Modal v-model:is-open="isOpen">
    <div class="modal">
      <h3>Вы готовы выложить работу? </h3>

      <p>Заполните также дополнительную информацию.</p>

      <label>
        Заголовок
      </label>
      <input type="text" v-model="form.header" />

      <label>
        Описание
      </label>
      <textarea maxlength="400" v-model="form.description" placeholder="Введите ваше описание здесь..." />

      <div class="buttons">
        <button class="exit" @click="isOpen = false">
          Выйти
        </button>

        <button class="continue" @click="$emit('onContinue')">
          Продолжить
        </button>
      </div>
    </div>
  </Modal>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100dvw;
  height: 60px;
  z-index: 3;
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  padding: var(--content-padding);
  border-bottom: 1px solid var(--border);

  .controls {
    margin-left: auto;
    display: flex;
    gap: 6px;
  }
}

.modal {
  width: 550px;
  aspect-ratio: 1/.8;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  padding: 32px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6em;
    margin-bottom: 9px;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 21px;
    font-size: .9em;
  }

  label {
    margin-bottom: 6px;
    font-size: 1em;
  }

  input {
    width: 100%;
    background-color: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    height: 35px;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 21px;
  }

  textarea {
    width: 100%;
    background-color: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    height: 60px;
    min-height: 80px;
    max-height: 120px;
    font-size: .9em;
    line-height: 1.25em;
    padding: 12px;
    resize: vertical;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
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