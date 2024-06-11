<script setup lang="ts">

const theme = useState('theme');

const isDarkTheme = () => {
  return theme.value === 'dark';
}

</script>

<template>
  <div class="icon" tabindex="0" @click="$router.push('/home/main')">
    <nuxt-img
      :src="isDarkTheme() ? useServerImage('/icon.png') : useServerImage('/icon-black.png')"
      width="28px"
      preload />
    <span>EduNexus</span>
  </div>
</template>

<style scoped lang="scss">
.icon {
  font-size: 1.3rem;
  font-weight: 900;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:focus:not(:active) {
    outline: 2px solid var(--text);
  }


  span {
    margin-left: 3px;
  }
}
</style>