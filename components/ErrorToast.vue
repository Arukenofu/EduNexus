<script setup lang="ts">

const message = useState('isError')

</script>

<template>
  <Transition name="toast">
    <div class="toast" v-if="message">
      <div class="toast-item">
        {{message}}
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.toast {
  pointer-events: none;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  .toast-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    min-width: 325px;
    height: 50px;
    text-align: center;
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    font-size: .9em;
    font-weight: 600;
    backdrop-filter: hue-rotate(45deg);
  }
}


.toast-enter-active {
  transition: bottom .3s ease;
}

.toast-leave-active {
  transition: bottom .3s ease, opacity .2s ease;
}

.toast-enter-from {
  bottom: -50px;
}

.toast-leave-to {
  bottom: -50px;
  opacity: 0;
}

</style>