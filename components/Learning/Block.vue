<script setup lang="ts">

defineProps<{
  text: any
}>()

</script>

<template>
  <section>
    <h5>{{text}}</h5>
    <slot />
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 42px;
}

h5 {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 9px;
  width: 100%;
}
</style>