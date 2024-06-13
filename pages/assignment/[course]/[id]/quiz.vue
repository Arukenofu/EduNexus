<script setup lang="ts">
import type { Quiz } from "~/interfaces/Quiz";

interface Response {
  id: number,
  title: string,
  content: {
    answers: string[],
    variant: Array<string[]>,
    questions: string[]
  },
  description: string,
  assignment_type_id: number
}

interface Quiziz extends Response{
  content: Quiz[],
  answers: string[]
}

const isStarted = ref<boolean>(false);

const route = useRouteParams();

const {data} = await useAsyncData<Quiziz>('quiz', async () => {
  let {assignment} = await $fetch<Response>(`/learning/${route.value.course}/assignments/${route.value.id}`, {
    baseURL: useRuntimeConfig().public.apiBase,
    headers: {
      Authorization: "Bearer " + getToken() || '',
    }
  });

  const quiz: Response['content'] = JSON.parse(assignment?.content);

  let temp = [];
  quiz.questions.forEach((question, index) => {
    temp.push({
      question: question,
      variants: quiz.variant[index],
    })
  })
  assignment.content = temp;
  assignment['answers'] = quiz.answers;

  return assignment;
});


const toggleStarted = () => {
  isStarted.value = true;
}

const currentQuizId = ref<number>(0);

const answers: number[] = [];

const quizQuestions: Quiz[] = data.value?.content

const currentQuiz = computed(() => {
  return quizQuestions[currentQuizId.value];
})

const onVariantChosen = async (value: string) => {

  await useGsap().to('.quiz', {
    opacity: 0,
    duration: .25,
    transitionTimingFunction: 'var(--transition-function)'
  })

  answers.push(value);

  currentQuizId.value++

  if (currentQuizId.value === quizQuestions.length) {
    return
  }

  await useGsap().to('.quiz', {
    opacity: 1,
    duration: .25,
    transitionTimingFunction: 'var(--transition-function)'
  })
}

</script>

<template>
  <div class="layout">

    <QuizControls />

    <Transition name="quiz" mode="out-in">
      <QuizPreview
        class="preview"
        v-if="!isStarted"
        @onStart="toggleStarted"
        :title="data?.title"
        :description="data?.description"
      />

      <QuizQuest
        class="quiz"
        v-model:current-quiz="currentQuiz"
        v-model:current-quiz-id="currentQuizId"
        v-model:quests-length="quizQuestions.length"
        @onVariantChosen="onVariantChosen"
        v-else-if="currentQuizId < quizQuestions.length"
      />

      <QuizAnswer
        :user="answers"
        :answers="data.answers"
        v-else
      />
    </Transition>

  </div>
</template>

<style scoped lang="scss">
* {
  transition: color var(--transition-function) .15s;
}

.layout {
  height: 100dvh;
  width: 100dvw;
  background-color: var(--bg);
  transition: background-color var(--transition-function) .15s;
  padding: 48px 120px;
}


.quiz-leave-active, .quiz-enter-active {
  transition: all .25s var(--transition-function);
}

.quiz-enter-from,
.quiz-leave-to {
  opacity: 0;
}

@media screen and (max-width: 850px) {
  .layout {
    padding: 48px 32px;
  }
}

</style>