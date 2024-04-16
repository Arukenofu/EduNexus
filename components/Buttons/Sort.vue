<script setup lang="ts">
import Button1x1 from "~/components/Buttons/Button1x1.vue";

const state = defineModel<number>('state')

const getSortedIcon = () => {
  if (state.value === 0) {
    return 'iconoir:sort'
  }
  if (state.value === 1) {
    return 'iconoir:sort-down'
  }
  if (state.value === 2) {
    return 'iconoir:sort-up'
  }
}

const setIconState = () => {
  if (typeof state.value === 'undefined') {
    return;
  }

  if (state.value < 2) {
    state.value++;
  } else {
    state.value = 0;
  }
}
</script>

<template>
  <Button1x1
    :icon-name="getSortedIcon()"
    title="Сортировать..."
    @click="setIconState()"
  />
</template>

<style scoped lang="scss">

</style>