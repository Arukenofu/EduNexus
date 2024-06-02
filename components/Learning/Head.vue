<script setup lang="ts">

import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";

const theme = useState('theme');

defineProps<{
  type: 'Learning' | 'Teaching'
}>()

const isDarkTheme = () => {
  return theme.value === 'dark';
}

</script>

<template>
  <header>
    <div
      @click="$router.push('/home/main')"
      class="logo"
    >
      <nuxt-img
        :src="isDarkTheme() ? '/icon.png' : '/icon-black.png'"
        width="36px"
        class="icon"
        preload
      />
      <div class="text">
        <p>EduNexus</p>
        <span>For {{type}}</span>
      </div>
    </div>

    <div class="control">

      <buttons-button1x1
        title="Переключить тему"
        :icon-name="themeConditionalState()"
        color="none"
        @click="toggleTheme()"
      />


      <button class="user" @click="$router.push('/home/profile')">
        <div class="pfp" />
        <span>Алкенов Б.</span>
      </button>

      <buttons-button1x1
        title="На главную страницу"
        icon-name="material-symbols:arrow-right-alt-rounded"
        color="none"
        @click="$router.push('/home/main')"

      />




    </div>


  </header>
</template>

<style scoped lang="scss">
header {
  padding: 0 36px;
  width: 100%;
  display: flex;
  background-color: var(--bg-fourth);
  height: 75px;
  border-radius: 14px;
  margin-top: 14px;
  align-items: center;
  margin-bottom: 21px;
  box-shadow:  0 2px 6px 0 rgba(0,0,0,.1),0 3px 7px -1px rgba(0,0,0,.1);

  .logo {
    font-size: 1.3rem;
    font-weight: 800;
    user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
      position: relative;
      bottom: 1px;
    }

    .text {
      margin-left: 3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1;
      gap: 2px;

      p {
        font-size: 1em;
      }

      span {
        font-size: .5em;
        font-weight: 500;
      }
    }
  }

  .control {
    margin-left: auto;
    display: flex;
    gap: 9px;

    .button {
      height: 100%;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 9px;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--text);
      font-size: 1em;

      &:hover {
        text-decoration: underline;
      }

      .pfp {
        height: 35px;
        aspect-ratio: 1/1;
        background-color: var(--bg-third);
        border-radius: 50%;
        outline: var(--border) 1px solid;
      }

      span {
        font-size: .9em;
        font-weight: 600;
      }
    }
  }
}
</style>