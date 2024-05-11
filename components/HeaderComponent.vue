<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";
import ProjectIcon from "~/components/ProjectIcon.vue";
import themeConditionalState from "~/utils/theme/themeConditionalState";
import Button1x1 from "~/components/Buttons/Button1x1.vue";


const exitFromAccount = () => {
  localStorage.removeItem('token');

  useRouter().push('/auth');
}

const isModalOpen = ref<boolean>(false);




</script>

<template>
  <header>

    <ProjectIcon />

    <slot />

    <div class="input-outer" @click="isModalOpen =! isModalOpen" >
      <Icon name="iconoir:search" class="search" size="1.1em" />
      <span>Поиск...</span>
    </div>

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
      @click="$router.push('/profile')"
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

  <Modal v-model:is-open="isModalOpen" />
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

  .input-outer {
    margin-left: auto;
    padding: 0 9px;
    width: 220px;
    height: 40px;
    border: var(--border) 1px solid;
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
    cursor: pointer;
    background-color: var(--bg);

    &:hover {
      background-color: var(--border);

      input {
        color: var(--text);

        &::placeholder {
          color: var(--text);
        }
      }
    }

    .search {
      color: var(--text-secondary);
    }

    span {
      font-size: .85em;
      margin-left: 9px;
      color: var(--text-secondary);
      user-select: none;
    }
  }

  .header-button {
    margin-left: 6px;
    height: 40px;
  }

  .toggleTheme {
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