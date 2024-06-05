<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";
import ProjectIcon from "~/components/ProjectIcon.vue";
import themeConditionalState from "~/utils/theme/themeConditionalState";
import Button1x1 from "~/components/Buttons/Button1x1.vue";


const exitFromAccount = () => {
  localStorage.removeItem('token');

  useRouter().push('/auth');
}

const inputClick = async (e: Event) => {
  if (useRoute().fullPath !== '/home/courses') {
    await useRouter().push('/home/courses')
  }

  const input = document.getElementById('search');

  input?.focus()

}

const search = ref('');



</script>

<template>
  <header>

    <ProjectIcon />

    <slot />

    <button1x1
      class="toggleTheme control header-button"
      title="Переключить тему"
      :iconName="themeConditionalState()"
      @click="toggleTheme()"
      hover-color="var(--bg)"
      color="none"
    />

    <button1x1
      title="Аккаунт"
      class="header-button"
      @click="$router.push('/home/profile')"
      icon-name="iconoir:user"
      hover-color="var(--bg)"
      color="none"
    />

    <button1x1
      class="exit header-button str2"
      title="Выйти"
      iconName="iconoir:log-out"
      text="var(--red)"
      @click="exitFromAccount()"
      hover-color="var(--bg)"
      color="none"
    />

  </header>
</template>

<style scoped lang="scss">
header {
  top: var(--electron);
  position: fixed;
  width: 100%;
  backdrop-filter: blur(8px);
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 92px;
  border-bottom: var(--border) 1px solid;



  .header-button {
    margin-left: 6px;
    height: 40px;
  }

  .toggleTheme {
    margin-left: auto;
    background-color: var(--bg);
    border: none;
    cursor: pointer;
    aspect-ratio: 1/1;
    border-radius: 6px;

    .icon {
      color: var(--text);
    }
  }

  .login {
    aspect-ratio: 1/1;
    border-radius: 6px;
    border: none;
    background-color: var(--main);
    color: #FFFFFF;
    font-weight: 700;
    cursor: pointer;
  }

  .exit {
    aspect-ratio: 1/1;
    border-radius: 6px;
    border: none;
    color: #FFFFFF;
  }
}

@media screen and (max-width: 1200px) {
  header {
    padding: var(--content-padding);
  }
}
</style>