<script setup lang="ts">

interface Props {
  iconName: string;
  color?: string;
  text?: string | void;
  size?: string;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'var(--bg)',
  text: 'var(--text)',
  size: '1.4rem',
  title: ''
})

</script>

<template>
  <button :title="title" :style="`background-color: ${color}`">
    <Icon class="icon" :size="size" :name="iconName" :style="`color: ${text}`" />
  </button>
</template>

<style scoped lang="scss">
button {
  margin-left: 9px;
  border: none;
  cursor: pointer;
  height: 40px;
  aspect-ratio: 1/1;
  border-radius: 6px;
}
</style>