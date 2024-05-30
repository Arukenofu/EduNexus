<script setup lang="ts">

const theme = useState('theme');

const isDarkTheme = () => {
  return theme.value === 'dark';
}


</script>

<template>
  <header>
    <div class="logo">
      <nuxt-img
        :src="isDarkTheme() ? '/icon.png' : '/icon-black.png'"
        width="36px"
        class="icon"
        preload />
      <div class="text">
        <p>EduNexus</p>
        <span>For Teaching</span>
      </div>
    </div>

    <div class="controls">
      <div class="user">
        <div class="pfp" />
        <span>Алкенов Б.</span>
      </div>
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

  .logo {
    font-size: 1.3rem;
    font-weight: 800;
    user-select: none;
    display: flex;
    align-items: center;

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

  .controls {
    margin-left: auto;

    .user {
      display: flex;
      align-items: center;
      gap: 6px;

      .pfp {
        height: 40px;
        aspect-ratio: 1/1;
        background-color: var(--bg-third);
        border-radius: 50%;
      }

      span {
        font-size: .9em;
        font-weight: 600;
      }
    }
  }
}
</style>