<script setup lang="ts">
const props = defineProps<{
  user: string[],
  answers: string[]
}>();

const maxPoints = 100;
const pointPerRightAnswer = maxPoints / props.answers.length;
let rightAnswers = 0;

for (let i = 0; i < props.answers.length; i++) {
  if (props.answers[i] === props.user[i]) {
    rightAnswers++
  }
}

const points = computed(() => {
  return pointPerRightAnswer * rightAnswers
});

const emoji = computed(() => {
  if (points.value > 85) {
    return '🎉'
  }
  if (points.value > 70) {
    return '😁'
  }
  if (points.value > 50) {
    return '👌'
  }
  if (points.value < 50) {
    return '😭'
  }
})

</script>

<template>
  <div class="answer">
    <h1>
      {{emoji}}Вы получили {{points}} баллов!
    </h1>
  </div>
</template>

<style lang="scss">
.answer {
  h1 {
    font-size: 2.1em;
    font-weight: 700;
    margin-bottom: 21px;
    transition: color var(--transition-function) .15s;
  }
}
</style>