<script setup lang="ts">

interface Props {
  columns: number,
  rows?: number | 'auto',
  gap?: string
}

const getGridColumns = computed(() => {
  let value: string = '';

  for (let i = 0; i < props.columns; i++) {
    value += "1fr "
  }

  return value
})

const getGridRows = computed(() => {
  if (typeof props.rows === 'string') {
    return 'auto'
  }

  let value: string = '';

  for (let i = 0; i < props.rows; i++) {
    value += "1fr "
  }

  return value
})

const props = withDefaults(defineProps<Props>(), {
  gap: '12px',
  rows: 'auto'
})

</script>

<template>
  <div class="grid-wrap">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-wrap {
  display: grid;
  gap: v-bind(gap);
  grid-template-columns: v-bind(getGridColumns);
  grid-template-rows: v-bind(getGridRows);
}
</style>