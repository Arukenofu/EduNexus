<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";

const themeConditionalState = (): string => {
  const theme = useState('theme', () => 'light');

  if (theme.value === 'dark') {
    return 'iconoir:sun-light'
  }

  else {
    return 'iconoir:half-moon'
  }
}

const isLogged = ref(true);

</script>

<template>
  <header>

    <div class="icon">
      EduNexus
    </div>

    <div class="input-outer">
      <Icon name="iconoir:search" class="search" size="2rem" />
      <input type="text" placeholder="Поиск...">
    </div>

    <button class="toggleTheme" @click="toggleTheme()">
      <Icon class="icon" size="1.4rem" :name="themeConditionalState()" />
    </button>

    <button v-if="!isLogged" class="login">
      Авторизация
    </button>

    <button v-else class="login logged"  >
      <Icon name="iconoir:user-circle" size="1.4rem" />
      <span>Личный Кабинет</span>
    </button>

    <button class="exit" v-if="isLogged">
      <Icon name="iconoir:log-out" size="1.4rem" />
    </button>

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

  .icon {
    font-size: 1.8rem;
    font-weight: 900;
    user-select: none;
  }

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
    background-color: #e85454;
    color: #FFFFFF;
  }
}
</style>