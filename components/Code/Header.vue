<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";
import github_dark from "assets/github-dark-theme.json";
import type * as Monaco from "monaco-editor";
import github_light from "assets/github-light-theme.json";
import themeConditionalState from "~/utils/theme/themeConditionalState";

defineEmits<{
  (event: 'compile'): Promise<void>
}>();

defineProps<{
  title: string
}>()

const getGithubTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    return github_dark as Monaco.editor.IStandaloneThemeData
  } else {
    return github_light as Monaco.editor.IStandaloneThemeData
  }
}

const monaco = useMonaco();

monaco?.editor.defineTheme('github', getGithubTheme())

monaco?.editor.setTheme('github');


document.fonts.ready.then(() => {
  monaco?.editor.remeasureFonts();
})

const changeTheme = () => {
  toggleTheme();

  monaco?.editor.defineTheme('github', getGithubTheme())

  monaco?.editor.setTheme('github');
}

</script>

<template>
  <header>

    <nuxt-img
      class="icon"
      :src="useServerImage('/icon.png')"
      width="28px"
      preload
    />

    <p class="title">
      {{title}}
    </p>

    <div class="control">
      <button class="toggleTheme" @click="changeTheme()">
        <Icon size="1.5em" :name="themeConditionalState()" />
      </button>

      <button class="run" @click="$emit('compile')">
        Выполнить код
      </button>

      <button class="toggleTheme" title="Назад" @click="$router.back()">
        <Icon size="1.5em" name="material-symbols:arrow-right-alt-rounded" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  width: 100dvw;
  height: 60px;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 24px;
  color: #FFFFFF;

  & > .icon {
    height: 35px;
    width: 35px;
  }


  .title {
    font-size: 1.5em;
    font-weight: 700;
  }

  .control {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    height: 100%;

    .toggleTheme {
      height: 60%;
      aspect-ratio: 1/1;
      background: none;
      border: none;
      color: #FAFAFA;
    }

    .run {
      display: block;
      background-color: #FAFAFA;
      color: #0f0f0f;
      border: none;
      height: 60%;
      padding: 0 9px;
      border-radius: 6px;
      font-weight: 700;
      font-size: .9em;
    }
  }

}

@media screen and (max-width: 768px) {
  header {
    padding: 0 12px;
  }
}
</style>