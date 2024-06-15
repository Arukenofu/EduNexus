<script setup lang="ts">

const daysOption = [
  'За всё время',
  'За месяц',
  'За неделю',
  'Сегодня',
]

const daysState = ref(useRoute()?.query.days || daysOption[0]);

</script>

<template>
  <LearningControls name="Действия">
    <LearningSelectDays v-model:state="daysState" :options="daysOption" />
  </LearningControls>

  <Transition name="learn" mode="out-in" appear>

    <div class="learn-wrap" >
      <TeachingAction
        text="Создание модуля &#34;Продвинутый уровень&#34; преподавателем Ersultan"
        date="5 Мая"
      />
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>