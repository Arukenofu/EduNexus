<script setup lang="ts">

const props = withDefaults(defineProps<{
  icon: string,
  side: 'left' | 'right'
}>(), {
  side: 'left'
})

const buttonPadding = computed(() => {
  if (props.side === 'left') {
    return '.65rem 1.35rem .65rem .645rem';
  } else {
    return '.65rem .645rem .65rem 1.35rem';
  }
})

</script>

<template>
  <button class="text-button">
    <Icon v-if="side === 'left'" size="1.5em" :name="icon" style="color: var(--text)" />
    <span>
      <slot />
    </span>
    <Icon v-if="side === 'right'" size="1.5em" :name="icon" style="color: var(--text)" />
  </button>
</template>

<style scoped lang="scss">
.text-button {
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: v-bind(buttonPadding);
  transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  display: flex;
  align-items: center;
  gap: .25rem;

  span {
    font-size: 1em;
  }

  &:hover {
    background-color: var(--bg-secondary);
  }
}
</style>