<script setup lang="ts">

const isOpen = defineModel<boolean>('isOpen');

const setBodyScroll = (value: 'hidden' | 'scroll') => {
  document.body.style.overflow = value;
}

watch(isOpen, (value) => {
  if (value) {
    setBodyScroll('hidden')
  } else {
    setBodyScroll('scroll')
  }
})

onUnmounted(() => {
  setBodyScroll('scroll');
});

const bgStyle = computed(() => {
  const theme = useState('theme');

  if (theme.value === 'light' || !theme.value) {
    return 'backdrop-filter: blur(4px);'
  } else {
    return 'background-color: rgba(0, 0, 0, 0.76);'
  }
})

</script>

<template>
  <transition name="bg" appear>
    <div
      v-if="isOpen"
      class="modal-bg"
      @click.self="isOpen =! isOpen"
      :style="bgStyle"
    >
      <div class="val">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">

.modal-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  .val {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 95dvw;
    transform: translate(-50%, -50%);
  }
}


.bg-enter-active {
  animation: enter 0.15s;
}
.bg-leave-active {
  animation: exit 0.15s;
}

@keyframes enter {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -48%) scale3d(.95, .95, .95) rotate(0);
  }
}

@keyframes exit {
  100% {
    opacity: 0;
    transform: translate3d(-50%, -48%) scale3d(.95, .95, .95) rotate(0);
  }
}

</style>