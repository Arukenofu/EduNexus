<script setup lang="ts">
import type * as Monaco from "monaco-editor";
import { useMonaco, useRouteParams } from "#imports";
import github_dark from '@/assets/github-dark-theme.json'
import github_light from '@/assets/github-light-theme.json'
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";

const getGithubTheme = computed(() => {
  if (localStorage.getItem('theme') && useState('theme').value === 'dark') {
    return github_dark as Monaco.editor.IStandaloneThemeData
  } else {
    return github_light as Monaco.editor.IStandaloneThemeData
  }
})

const model = ref('int main() {}');

const {course} = useRouteParams()

const monaco = useMonaco();

monaco?.editor.defineTheme('github', getGithubTheme.value)

monaco?.editor.setTheme('github');

document.fonts.ready.then(() => {
  monaco?.editor.remeasureFonts();
})

const options: Monaco.editor.IStandaloneEditorConstructionOptions = {
  theme: 'github',
  fontSize: 16,
  fontFamily: 'JetBrains Mono',
  fontWeight: '700',
  minimap: {
    enabled: false
  },
  fontLigatures: ''
}

const changeTheme = () => {
  toggleTheme();

  monaco?.editor.defineTheme('github', getGithubTheme.value)

  monaco?.editor.setTheme('github');
}

</script>

<template>
  <header>

    <div class="text-info">
      <h1>Методы сортировки</h1>
      <p>{{course}}</p>
    </div>

    <div class="options">
      <ButtonsButton1x1
        title="Переключить тему"
        :iconName="themeConditionalState()"
        @click="changeTheme()"
        hover-color="#09090B"
        color="#09090B"
        text="#FFFFFF"
      />

      <button class="launch">
        Запуск
      </button>
    </div>
  </header>

  <MonacoEditor v-model:model-value="model" lang="cpp" class="editor" :options="options">
    ...Loading
  </MonacoEditor>
</template>

<style scoped lang="scss">
.editor {
  width: 100dvw;
  height: calc(100dvh - 60px - 12px);
  position: relative;
  top: 12px;
}

header {
  position: sticky;
  top: 0;
  width: 100dvw;
  height: 60px;
  background-color: #0f0f0f;
  display: flex;
  padding-left: 70px;
  padding-right: 70px;

  .text-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1.2em;
      color: #FFFFFF;
    }

    p {
      color: #A1A1AA;
      font-size: .8em;
    }

  }

  .options {
    height: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;

    .launch {
      height: 65%;
      font-size: .9em;
      font-weight: 700;
      padding: 0 24px;
      background-color: var(--green);
      border: none;
      border-radius: 4px;
      margin-left: 12px;
    }
  }
}

:global(.scroll-decoration) {
  display: none;
}


</style>