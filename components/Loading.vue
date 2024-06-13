<script setup lang="ts">

withDefaults(defineProps<{
  size?: string
}>(), {
  size: '32px'
})

</script>

<template>
  <span class="loader" :style="`width: ${size}`">

  </span>
</template>

<style scoped lang="scss">
.loader {
  aspect-ratio: 1/1;
  border: 4px solid var(--text);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>