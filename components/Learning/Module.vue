<script setup lang="ts">
import { gsap } from "gsap";
import type { Module } from "~/interfaces/Module";

interface Props extends Module {
  index: number
}

const props = defineProps<Props>();

const getProgressBarWidth = (has: number, length: number): number => {
  return (has / length) * 100
}



</script>

<template>
  <div class="module">
    <div class="head">
      <p>Модуль {{index}}:</p>
      <span>
        {{name}}
      </span>
    </div>

    <div class="body">

      <div class="statistic">
        <p>Прогресс: {{lectures}} / {{max}}</p>
        <div class="progress">
          <div class="bar lecture" :style="`width: ${getProgressBarWidth(lectures, max)}%`" />
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
.module {
  background-color: var(--ui-secondary);
  padding: 28px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform .5s var(--transition-function);

  &:hover {
    transform: matrix3d(1.01, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1.01, 0, 1.648, -4.12, 345.6, 1);
  }

  .head {
    display: flex;
    flex-direction: column;
    line-height: 1;

    p {
      font-size: .95em;
      font-weight: 500;
      margin-bottom: 6px;
    }

    span {
      font-size: 1.4em;
      font-weight: 700;
    }
  }

  .body {
    margin-top: 28px;

    .statistic {
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 6px;
      }

      .progress {
        width: 100%;
        background-color: var(--bg-secondary);
        height: 3px;
        border-radius: 2px;
        margin-bottom: 15px;

        .bar {
          background-color: var(--text);
          height: 100%;
          border-radius: 2px;
        }
      }

    }
  }
}
</style>