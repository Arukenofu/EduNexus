<script setup lang="ts">
import type { Quiz } from "~/interfaces/Quiz";

const currentQuizId = defineModel<number>('currentQuizId');
const questsLength = defineModel<number>('questsLength');

const currentQuiz = defineModel<Quiz>('currentQuiz');

defineEmits(['onVariantChosen'])

</script>

<template>
  <div class="quiz-section">
    <div class="option">
      <span>
        Вопросы: {{ currentQuizId! + 1 }}/{{ questsLength! }}
      </span>
    </div>

    <h1>
      {{currentQuiz?.question}}
    </h1>

    <Grid class="wrap" gap="18px">
      <div
        class="variant"
        v-for="(value, index) in currentQuiz?.variants"
        :key="index"
        @click="$emit('onVariantChosen', value)"
      >
        {{ value }}
      </div>
    </Grid>

  </div>
</template>

<style lang="scss">
.quiz-section {
  .option {
    margin-bottom: 6px;

    span {
      font-size: .95em;
      font-weight: 600;
      transition: color var(--transition-function) .15s;
      color: var(--text-secondary);
    }
  }

  h1 {
    font-size: 2.25em;
    font-weight: 700;
    margin-bottom: 28px;
    transition: color var(--transition-function) .15s;
  }

  .wrap {
    max-width: 60%;
    grid-template-columns: 1fr;

    .variant {
      height: 55px;
      background-color: var(--border);
      display: grid;
      place-items: center;
      border-radius: 45px;
      transition: background-color var(--transition-function) .15s;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: var(--bg-secondary);
        transition: background-color var(--transition-function) .15s;
      }
    }
  }
}

</style>