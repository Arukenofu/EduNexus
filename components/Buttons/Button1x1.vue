<script setup lang="ts">

interface Props {
  iconName: string;
  color?: string;
  text?: string | void;
  size?: string;
  title?: string;
  leftSideText?: string,
  hoverColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'var(--bg)',
  text: 'var(--text)',
  size: '1.4rem',
  title: '',
  hoverColor: ''
})


</script>

<template>
  <button
    :title="title"
    :style="`background: ${color}`"
    :class="leftSideText && 'hasLeftSideText'"
    :data-foo="hoverColor"
  >

    <Icon class="icon" :size="size" :name="iconName" :style="`color: ${text}`" />

    <span v-if="leftSideText">
      {{leftSideText}}
    </span>

  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  cursor: pointer;
  height: 40px;
  max-height: 40px;
  aspect-ratio: 1/1;
  border-radius: 6px;

  &:hover {
    background-color: v-bind(hoverColor) !important;
  }
}

.hasLeftSideText {
  aspect-ratio: unset;
  min-width: 40px;
  padding: 0 12px;

  span {
    color: var(--text);
    position: relative;
    top: 2px;
    margin-left: 6px;
    font-weight: 600;
  }
}
</style>