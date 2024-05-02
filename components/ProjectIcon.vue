<script setup lang="ts">

const theme = useState('theme');

const isDarkTheme = () => {
  return theme.value === 'dark';
}

</script>

<template>
  <div class="icon">
    <nuxt-img
      :src="isDarkTheme() ? '/icon.png' : '/icon-black.png'"
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
  display: flex;
  align-items: center;

  span {
    margin-left: 3px;
  }
}
</style>