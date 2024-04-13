<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";
import ProjectIcon from "~/components/ProjectIcon.vue";
import themeConditionalState from "~/utils/theme/themeConditionalState";

const isLogged = ref(true);

</script>

<template>
  <header>

    <ProjectIcon />

    <div class="input-outer">
      <Icon name="iconoir:search" class="search" size="2rem" />
      <input type="text" placeholder="Поиск...">
    </div>

    <button1x1 class="toggleTheme control" title="Переключить тему" :iconName="themeConditionalState()" @click="toggleTheme()" />

    <button v-if="!isLogged" class="login">
      Авторизация
    </button>

    <button v-else class="login logged"  >
      <Icon name="iconoir:user-circle" size="1.4rem" />
      <span>Личный Кабинет</span>
    </button>

    <button1x1 class="exit"
               title="Выйти"
               iconName="iconoir:log-out"
               color="var(--red)"
               text="#FFFFFF"
               @click="$router.push('/auth')"
    />

  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: 80px;
  background-color: var(--bg-secondary);
  display: flex;
  align-items: center;
  padding: var(--content-padding);

  .input-outer {
    margin-left: 33px;
    padding: 0 9px;
    width: 200px;
    height: 40px;
    border: var(--text-secondary) 2px solid;
    border-radius: 12px;
    display: flex;
    align-items: center;

    .search {
      color: var(--text-secondary);
    }

    input {
      font-family: "Nunito Sans", sans-serif;
      margin-left: 9px;
      border: none;
      background: none;
      outline: none;
      font-weight: 500;
      color: var(--text);
      height: 100%;
    }
  }

  .toggleTheme {
    margin-left: auto;
    background-color: var(--bg);
    border: none;
    cursor: pointer;
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 6px;

    .icon {
      color: var(--text);
    }
  }

  .login {
    height: 40px;
    padding: 0 21px;
    border-radius: 6px;
    margin-left: 12px;
    border: none;
    background-color: var(--main);
    color: #FFFFFF;
    font-weight: 700;
    font-size: .9rem;
    cursor: pointer;
  }

  .logged {
    display: flex;
    align-items: center;
    padding: 0 14px;
    gap: 5px;

    span {
      display: block;
    }
  }

  .exit {
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 6px;
    margin-left: 12px;
    border: none;
    background-color: var(--red);
    color: #FFFFFF;
  }
}
</style>