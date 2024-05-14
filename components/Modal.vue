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
})



</script>

<template>
  <transition name="bg">
    <div v-if="isOpen" class="modal-bg" @click.self="isOpen =! isOpen" >
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
  background-color: rgba(0, 0, 0, 0.76);
  z-index: 2;

  .val {
    position: absolute;
    top: 50%;
    left: 50%;
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