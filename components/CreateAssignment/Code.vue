<script setup lang="ts">
import github_dark from "assets/github-dark-theme.json";
import type * as Monaco from "monaco-editor";

const query = useRouteQuery()

const title = defineModel<string>('title');
const description = defineModel<string>('description');
const module = defineModel<string>('module');
const state = ref<string>('')

const getGithubTheme = () => {
  return github_dark as Monaco.editor.IStandaloneThemeData
}

const monaco = useMonaco();

monaco?.editor.defineTheme('github', getGithubTheme())

monaco?.editor.setTheme('github');


document.fonts.ready.then(() => {
  monaco?.editor.remeasureFonts();
})

const options: Monaco.editor.IStandaloneEditorConstructionOptions = {
  theme: 'github',
  fontSize: 16,
  fontFamily: 'JetBrains Mono',
  fontWeight: '600',
  minimap: {
    enabled: false
  },
  fontLigatures: ''
}

async function submitCodeAssignment() {
  if (title.value!?.trim()?.length < 6) {
    return sendToast({
      type: "error",
      message: "Название задания меньше 6 символов"
    })
  }

  if (description.value!?.trim()?.length < 10) {
    return sendToast({
      type: "error",
      message: "Описание задания меньше 10 символов"
    })
  }

  const {data, error} = await useAPI(`/teachings/${query.value.course}/assignments`, {
    method: 'POST',
    body: {
      module_name: module.value,
      title: title.value,
      description: description.value,
      content: JSON.stringify({
        language: 'go',
        code_test: state.value,
        quiz_question: ""
      }),
      assignment_type_id: 3
    }
  });

  if (error.value) {
    return sendToast({
      type: "error",
      message: "Правильно заполните форму"
    })
  }

  sendToast({
    type: "notification",
    message: "Задание создано"
  });

}


</script>

<template>
  <div class="code">
    <div class="left">
      <p>Название задания</p>
      <input type="text" placeholder="Название" v-model="title" />

      <p>Описание задания</p>
      <textarea placeholder="Описание" v-model="description" />

      <div class="send">
        <button @click="submitCodeAssignment()">
          Отправить
        </button>
      </div>
    </div>

    <div class="test">
      <MonacoEditor class="monaco" lang="go" v-model:model-value="state" :options="options" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.code {
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  .left {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.2em;
      margin-bottom: 6px;
    }

    input {
      height: 35px;
      background-color: var(--bg-third);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 0 12px;
      border-radius: 4px;
      font-size: 1em;
      margin-bottom: 14px;
    }

    textarea {
      background-color: var(--bg-third);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 4px;
      padding: 12px;
      resize: none;
      height: 120px;
      margin-bottom: 14px;
    }

    .send {

      button {
        display: flex;
        margin-left: auto;
        font-size: .95em;
        padding: 6px 12px;
        background-color: var(--text);
        color: var(--bg);
        border-radius: 4px;
        border: none;
      }
    }
  }

  .test {
    flex: 1;
    min-width: 350px;
    background-color: #09090B;
    border-radius: 8px;
    border: 1px solid var(--border);
    height: 65dvh;
    position: relative;

    .monaco {
      padding: 12px 0 0;
      height: 100%;
    }
  }
}

</style>