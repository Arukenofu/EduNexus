<script setup lang="ts">
import type * as Monaco from "monaco-editor";
import { useMonaco, useRouteParams } from "#imports";
import github_dark from 'assets/github-dark-theme.json'
import github_light from 'assets/github-light-theme.json'
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";

interface Code {
  assignment: {
    id: number,
    title: string,
    content: string,
    description: string,
    assignment_type_id: number
  }
}

const route = useRouteParams();

const {data} = await useAPI<Code>(`/learning/${route.value.course}/assignments/${route.value.id}`);

const getGithubTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    return github_dark as Monaco.editor.IStandaloneThemeData
  } else {
    return github_light as Monaco.editor.IStandaloneThemeData
  }
}

const model = ref();

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

const changeTheme = () => {
  toggleTheme();

  monaco?.editor.defineTheme('github', getGithubTheme())

  monaco?.editor.setTheme('github');
}

async function sendToCompile() {
  const {data: result, error} = await useAPI(`/learning/${route.value.course}/assignments/${data.value?.assignment.id}`, {
    method: 'POST',
    body: {
      source: model.value
    }
  })

  if (error.value) {
    return sendToast({
      type: "error",
      message: "Ошибка формы"
    })
  }

  console.log(result.value);
}

const isDescriptionModalOpen = ref(true);
const isResultsModalOpen = ref(false);

</script>

<template>
  <header>
    <div class="text-info">
      <h1>{{route.course}}</h1>
      <p>{{data.assignment.title}}</p>
    </div>

    <div class="control">
      <ButtonsButton1x1
        title="Переключить тему"
        :iconName="themeConditionalState()"
        @click="changeTheme()"
        hover-color="var(--text)"
        color="var(--text)"
        text="var(--bg)"
        width="42px"
      />

      <button class="launch" @click="sendToCompile()">
        Запуск
      </button>

      <ButtonsButton1x1
        title="Выйти"
        icon-name="iconoir:log-out"
        class="exit"
        color="var(--red)"
        text="#FFFFFF"
        width="42px"
        @click="$router.back()"
      />
    </div>
  </header>

  <LazyMonacoEditor v-model:model-value="model" lang="go" class="editor" :options="options">
    ...Loading
  </LazyMonacoEditor>

  <Modal v-model:is-open="isDescriptionModalOpen" v-if="data.assignment.description">
    <div class="modal-inner">
      <h1>Цель задачи</h1>
      <p>{{data.assignment.description}}</p>
      <button @click="isDescriptionModalOpen = false">
        Подтвердить
      </button>
    </div>
  </Modal>

  <Modal v-model:is-open="isResultsModalOpen">

  </Modal>
</template>

<style scoped lang="scss">


.editor {
  width: 100dvw;
  height: calc(100dvh - 75px - 12px);
  position: relative;
  top: 12px;
}

header {
  position: sticky;
  top: 0;
  width: 100dvw;
  height: 75px;
  background-color: #0f0f0f;
  display: flex;
  padding-left: 70px;
  padding-right: 70px;

  .text-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1.5em;
      color: #FFFFFF;
    }

    p {
      color: #A1A1AA;
      font-size: .9em;
    }

  }

  .control {
    height: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 9px;

    .launch {
      height: 42px;
      font-size: .9em;
      font-weight: 700;
      padding: 0 30px;
      background-color: var(--green);
      border: none;
      border-radius: 6px;
    }
  }
}

:global(.scroll-decoration) {
  display: none;
}

.modal-inner {
  width: 550px;
  padding: 30px 24px;
  background-color: var(--bg);
  border-radius: 8px;
  border: 1px solid var(--border);
  line-height: 1;

  h1 {
    font-size: 1.75em;
    margin-bottom: 14px;
    font-weight: 800;
  }

  p {
    line-height: initial;
    font-size: .95em;
    margin-bottom: 14px;
  }

  button {
    display: flex;
    margin-left: auto;
    background-color: var(--text);
    border: none;
    color: var(--bg);
    font-size: .9em;
    font-weight: 600;
    padding: 9px 12px;
    border-radius: 4px;
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 0 12px;
  }
}

</style>