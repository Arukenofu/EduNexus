<script setup lang="ts">
const state = defineModel<boolean>('state');

const setBodyScroll = (value: 'hidden' | 'scroll') => {
  document.body.style.overflow = value;
  const root = document.getElementById('content')

  if (root) {
    root.style.overflow = value
  }
}

watch(state, (value) => {
  if (value) {
    setBodyScroll('hidden')
  } else {
    setBodyScroll('scroll')
  }
});

onUnmounted(() => {
  setBodyScroll('scroll')
})

function closeDialog() {
  state.value = false;
}

</script>

<template>
  <Transition name="bg" appear>
    <div v-if="state" class="dialog-bg" @click.self="closeDialog()">
      <Transition name="dialog" appear>
        <div class="dialog">
          <ProjectIcon class="icon" />

          <slot />

        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.dialog-bg {
  left: 0;
  top: 0;
  position: fixed;
  z-index: 6;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.69);

  .dialog {
    position: fixed;
    left: 0;
    top: 0;
    height: 100dvh;
    width: 300px;
    background-color: var(--bg);
    border-right: 1px solid var(--border);
    padding: 26px 32px;

    .icon {
      font-size: 1.3rem;
    }
  }
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

.bg-enter-active {
  animation: enter 0.15s;
}
.bg-leave-active {
  animation: exit 0.15s;
}

.dialog-enter-active {
  transform: translateX(0);
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .7s;
}

.dialog-enter-from,
.dialog-leave-to {
  transform: translateX(-300px);
}
</style>