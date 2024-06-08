<script setup lang="ts">

import type { Quiz } from "~/interfaces/Quiz";

const isStarted = ref<boolean>(false);

const toggleStarted = () => {
  isStarted.value = true;
}

const currentQuizId = ref<number>(0);

const answers: number[] = [];

const quizQuestions: Quiz[] = [
  {
    question: 'What is the capital of France?',
    variants: [
      'Berlin',
      'Madrid',
      'Paris',
      'Rome'
    ]
  },
  {
    question: 'What is the largest planet in our solar system?',
    variants: [
      'Earth',
      'Jupiter',
      'Mars',
      'Venus'
    ]
  },
  {
    question: 'Who wrote "To be, or not to be"?',
    variants: [
      'Charles Dickens',
      'Jane Austen',
      'Mark Twain',
      'William Shakespeare'
    ]
  },
  {
    question: 'What is the chemical symbol for water?',
    variants: [
      'O2',
      'H2O',
      'CO2',
      'NaCl'
    ]
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    variants: [
      'China',
      'Japan',
      'South Korea',
      'Thailand'
    ]
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    variants: [
      'Gold',
      'Iron',
      'Diamond',
      'Platinum'
    ]
  },
  {
    question: 'Who painted the Mona Lisa?',
    variants: [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Claude Monet'
    ]
  },
  {
    question: 'What is the smallest prime number?',
    variants: [
      '0',
      '1',
      '2',
      '3'
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    variants: [
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn'
    ]
  },
  {
    question: 'What is the main ingredient in sushi?',
    variants: [
      'Bread',
      'Pasta',
      'Rice',
      'Potato'
    ]
  },
  {
    question: 'Who is known as the Father of Computers?',
    variants: [
      'Albert Einstein',
      'Isaac Newton',
      'Charles Babbage',
      'Thomas Edison'
    ]
  },
  {
    question: 'What is the capital of Australia?',
    variants: [
      'Sydney',
      'Melbourne',
      'Canberra',
      'Brisbane'
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    variants: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean'
    ]
  },
  {
    question: 'Which element has the atomic number 1?',
    variants: [
      'Helium',
      'Oxygen',
      'Hydrogen',
      'Carbon'
    ]
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    variants: [
      'George Orwell',
      'William Shakespeare',
      'Homer',
      'Leo Tolstoy'
    ]
  }
];

const currentQuiz = computed(() => {
  return quizQuestions[currentQuizId.value];
})

const onVariantChosen = async (value: number) => {

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
        title="Викторина «Название Викторины»"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
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

</style>