<script setup lang="ts">

interface Props {
  iconName: string;
  color?: string;
  text?: string | void;
  size?: string;
  title?: string;
  leftSideText?: string,
  hoverColor?: string,
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'var(--bg)',
  text: 'var(--text)',
  size: '1.4rem',
  title: '',
  hoverColor: '',
  width: '40px'
})

const hover = computed(() => {
  if (!props.hoverColor) {
    return props.color
  } else {
    return props.hoverColor
  }
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
  width: v-bind(width);
  max-width: v-bind(width);
  aspect-ratio: 1/1;
  border-radius: 6px;
  transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;

  &:hover {
    background-color: v-bind(hover) !important;
  }
}

.hasLeftSideText {
  aspect-ratio: unset;
  padding: 0 6px;
  width: auto;
  height: v-bind(width);
  max-width: none;
  display: flex;
  align-items: center;

  span {
    color: var(--text);
    margin-left: 6px;
    padding-right: 6px;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>