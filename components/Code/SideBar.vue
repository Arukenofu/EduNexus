<script setup lang="ts">

defineProps<{
  results: string,
  pending: boolean,
  instructions: string
}>()

const isMobile = useDevice();

const state = defineModel<boolean>('state');

</script>

<template>
  <aside :class="state && 'active'" >
    <buttons-button1x1
      icon-name="iconoir:xmark"
      class="close"
      @click="state = false"
      v-if="isMobile"
    />

    <div class="info">
      <h1>Инструкции</h1>

      <div class="root" v-html="instructions">

      </div>
    </div>

    <div class="bottom">
      <h3>Вывод</h3>

      <div class="results">

        <template v-if="pending">
          <Loading />
        </template>

        <template v-else-if="results">
          Тестов пройдено: {{results}}
        </template>


        <LearningNoData v-else />
      </div>
    </div>
  </aside>


</template>

<style scoped lang="scss">
aside {
  width: 33dvw;
  min-width: 150px;
  height: calc(100dvh - 60px);
  border-right: 1px solid var(--border);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all .15s var(--transition-function), left .5s var(--transition-function);

  .close {
    position: absolute;
    right: 6px;
    top: 6px;
  }

  .info {
    flex: 1;
    padding: 24px;
    overflow-y: scroll;
    overflow-x: hidden;

    h1 {
      width: 100%;
      margin-bottom: 6px;
    }

    .root {
      font-size: .9em;
      color: var(--text-soft);
    }

  }

  .bottom {
    width: 100%;
    height: 225px;
    border-top: 1px solid var(--border);
    transition: all .15s var(--transition-function);
    padding: 24px;
    position: relative;

    h3 {
      width: 100%;
    }

    .results {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: grid;
      place-items: center;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
}

.active {
  left: 0 !important;
}

@media screen and (max-width: 768px) {
  aside {
    position: fixed;
    left: -275px;
    top: 0;
    background-color: var(--bg);
    z-index: 3;
    width: unset !important;
    min-width: 275px !important;
    height: 100dvh !important;
  }
}

</style>