<script setup lang="ts">
import toggleTheme from "~/utils/theme/toggleTheme";
import ProjectIcon from "~/components/ProjectIcon.vue";
import themeConditionalState from "~/utils/theme/themeConditionalState";
import Button1x1 from "~/components/Buttons/Button1x1.vue";
import useDevice from "~/composables/useDevice";


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

const isMobile = useDevice();
const isDialogOpen = ref<boolean>(false);

</script>

<template>
  <header>

    <button
      class="mobile-burger"
      v-if="isMobile"
      @click="isDialogOpen = true"
    >
      <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>

    <ProjectIcon class="project-icon" />

    <NavBar direction="row" v-if="!isMobile" />

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

  <Dialog v-if="isMobile" v-model:state="isDialogOpen">
    <div class="routes">
      <NavBar
        direction="column"
        align="inherit"
        gap="15px"
        font-size="1.2em"
        @onRouteClick="isDialogOpen = false"
      />
    </div>
  </Dialog>
</template>

<style scoped lang="scss">
header {
  top: var(--electron);
  position: fixed;
  width: 100%;
  max-width: 100dvw;
  backdrop-filter: blur(8px);
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 92px;
  border-bottom: var(--border) 1px solid;

  .mobile-burger {
    height: 40px;
    aspect-ratio: 1/1;
    background: none;
    border: none;
    color: var(--text);
    padding: 9px;
    margin-right: 9px;
  }

  .header-button {
    margin-left: 6px;
    height: 40px;
    font-size: 1rem;
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

@media screen and (max-width: 768px) {
  .header-button {
    height: 40px !important;
    width: 40px;
    font-size: .9rem !important;
  }
}

.project-icon {
  margin-right: 36px;
}


.routes {
  margin-top: 21px;
}
</style>