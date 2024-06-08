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

const model = ref(JSON.parse(data.value!.assignment.content)['code_test']);

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

      <button class="launch">
        Запуск
      </button>

      <ButtonsButton1x1
        title="Выйти"
        icon-name="iconoir:log-out"
        class="exit"
        color="var(--red)"
        text="#FFFFFF"
        width="42px"
      />
    </div>
  </header>

  <LazyMonacoEditor v-model:model-value="model" lang="go" class="editor" :options="options">
    ...Loading
  </LazyMonacoEditor>
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


</style>