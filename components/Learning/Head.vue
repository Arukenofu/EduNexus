<script setup lang="ts">
import themeConditionalState from "~/utils/theme/themeConditionalState";
import toggleTheme from "~/utils/theme/toggleTheme";
import type { User } from "~/interfaces/User";

const theme = useState('theme');

defineProps<{
  type: 'Learning' | 'Teaching'
}>()

const isDarkTheme = () => {
  return theme.value === 'dark';
}

const {data: user} = await useAPI<User>('/profile');

const isMobile = useDevice();

const route = useRouteParams();

function onExit() {
  if (useRoute().matched[0].path === '/learn') {
    return useRouter().push('/home/my-learning')
  }

  useRouter().push('/home/main')
}



</script>

<template>
  <header>

    <div
      @click="$router.push('/home/main')"
      class="logo"
    >

      <nuxt-img
        :src="isDarkTheme() ? useServerImage('/icon.png') : useServerImage('/icon-black.png')"
        width="32px"
        class="icon"
        preload
      />
      <div class="text" v-if="!isMobile">
        <p>EduNexus</p>
        <span>For {{type}}</span>
      </div>
    </div>

    <div class="course-name" v-if="isMobile">
      {{route.course || 'Курс'}}
    </div>


    <div class="control">

      <buttons-button1x1
        title="Переключить тему"
        :icon-name="themeConditionalState()"
        color="none"
        @click="toggleTheme()"
        v-if="!isMobile"
      />


      <button class="user" @click="$router.push('/home/profile')" v-if="!isMobile">
        <div class="pfp" :style="setAvatar(user?.profile_info.profile)" />
        <span>{{user?.profile_info.firstname}}</span>
      </button>

      <buttons-button1x1
        title="На главную страницу"
        icon-name="material-symbols:arrow-right-alt-rounded"
        color="none"
        @click="onExit()"
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
  align-items: center;
  margin-bottom: 21px;
  box-shadow:  0 2px 6px 0 rgba(0,0,0,.1),0 3px 7px -1px rgba(0,0,0,.1);
  position: relative;

  .mobile-burger {
    height: 40px;
    aspect-ratio: 1/1;
    background: none;
    border: none;
    color: var(--text);
    padding: 9px;
    margin-right: 9px;
  }

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
      height: 100%;
      aspect-ratio: 1/1;
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

  .course-name {
    margin: 0 auto;
    font-size: 1.2em;
    font-weight: 700;
    user-select: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
        background-size: cover;
        background-position: center;
        border: 2px solid var(--bg-third);
      }

      span {
        font-size: .9em;
        font-weight: 600;
      }
    }
  }
}

.select {
  margin: 0 auto;
  background: none;
  border: none;

  .content {
    background: none;
    border: none;
  }

  .options {
    border: 1px solid var(--border);
    height: auto;

    .option {
      text-align: center;
    }
  }
}

.course-name {
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  header {
    position: absolute;
    width: 100dvw;
    left: 0;
    top: 0;
    margin: 0 !important;
    border-radius: 0;
    padding: 0 9px;
    height: 50px;
  }
}
</style>